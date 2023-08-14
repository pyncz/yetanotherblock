/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
*/
import i18nConfig from './next-i18next.config.js'

const { i18n } = i18nConfig

!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'))

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,

  // Fixes reservoir/NextJS CommonJS module issue
  // @see https://docs.reservoir.tools/reference/troubleshooting#nextjs-commonjs-module-error
  transpilePackages: [
    '@reservoir0x/reservoir-kit-ui',
  ],

  // Fill allowed domains for next/image
  images: {
    domains: [
      'i.seadn.io',
    ],
  },
}
export default config
