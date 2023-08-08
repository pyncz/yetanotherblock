import { isClientSide } from './isClientSide'

export const getAppBaseUrl = () => {
  if (isClientSide()) {
    return window.location.origin
  }

  // SSR should use vercel url, dev SSR should use localhost
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT ?? 3000}`
}

export const getAppDomain = () => {
  if (isClientSide()) {
    return window.location.host
  }

  return process.env.VERCEL_URL ?? 'localhost'
}
