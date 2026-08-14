# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine AS production
WORKDIR /app

RUN addgroup -S strapi && adduser -S strapi -G strapi

ENV NODE_ENV=production
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

RUN mkdir -p public/uploads .tmp && chown -R strapi:strapi /app

USER strapi
EXPOSE 1337

CMD ["npm", "run", "start"]
