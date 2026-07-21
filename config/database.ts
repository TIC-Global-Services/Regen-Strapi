import path from 'path';
import type { Core } from '@strapi/strapi';

function optionalSsl(env: any) {
  if (!env.bool('DATABASE_SSL', false)) return undefined;
  return { rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true) };
}

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Database => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: optionalSsl(env),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 0), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: optionalSsl(env),
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 0), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  if (!(client in connections)) {
    throw new Error(
      `Unsupported DATABASE_CLIENT: ${client}. Use "postgres", "mysql", or "sqlite".`
    );
  }

  return {
    connection: {
      client: client as keyof typeof connections,
      ...connections[client as keyof typeof connections],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  } as Core.Config.Database;
};

export default config;
