import type { Core } from '@strapi/strapi';

const allowedMediaTypes = [
  'image/*',
  'video/*',
  'audio/*',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.*',
  'text/plain',
  'text/csv',
];

const deniedExecutableTypes = [
  'application/vnd.microsoft.portable-executable',
  'application/x-msdownload',
  'application/x-msdos-program',
  'application/x-executable',
  'application/x-dosexec',
  'application/x-sh',
  'text/x-shellscript',
  'application/x-mach-binary',
];

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'users-permissions': {
    config: {
      jwtManagement: 'refresh',
      sessions: {
        httpOnly: true,
      },
    },
  },
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024, // 250MB, raise as needed
      security: {
        allowedTypes: allowedMediaTypes,
        deniedTypes: deniedExecutableTypes,
      },
      ...(env('CLOUDFLARE_ACCOUNT_ID')
        ? {
            provider: 'aws-s3',
            providerOptions: {
              baseUrl: env('CLOUDFLARE_PUBLIC_URL'),
              s3Options: {
                credentials: {
                  accessKeyId: env('CLOUDFLARE_ACCESS_KEY_ID'),
                  secretAccessKey: env('CLOUDFLARE_SECRET_KEY'),
                },
                region: 'auto',
                endpoint: `https://${env('CLOUDFLARE_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
                // R2 doesn't support ACLs; explicit `undefined` stops the provider
                // from defaulting to ACL: 'public-read', which R2 rejects.
                params: { Bucket: env('CLOUDFLARE_BUCKET_NAME'), ACL: undefined },
              },
            },
          }
        : {}),
    },
  },
});

export default config;
