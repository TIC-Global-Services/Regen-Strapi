# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

RUN apk add --no-cache libc6-compat vips-dev

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine AS production
WORKDIR /app

RUN apk add --no-cache vips \
    && addgroup -S strapi && adduser -S strapi -G strapi

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY --from=build /app/config ./config
COPY --from=build /app/src ./src
COPY --from=build /app/database ./database

RUN mkdir -p public/uploads .tmp && chown -R strapi:strapi /app

USER strapi
EXPOSE 1337

CMD ["npm", "run", "start"]
