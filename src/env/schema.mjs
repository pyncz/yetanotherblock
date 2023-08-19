import { z } from 'zod'

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  // server-only secrets
})

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
*/
export const clientSchema = z.object({
  // NEXT_PUBLIC_ client vars
  NEXT_PUBLIC_MAIN_MARKETPLACE_URL: z.string().url(),
  NEXT_PUBLIC_RESERVOIRE_API_KEY: z.string(),
  NEXT_PUBLIC_RESERVOIRE_COLLECTION_SET_ID: z.string(),
  NEXT_PUBLIC_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.input<typeof clientSchema>]: string | undefined }}
 */
export const clientEnv = {
  NEXT_PUBLIC_MAIN_MARKETPLACE_URL: process.env.NEXT_PUBLIC_MAIN_MARKETPLACE_URL,
  NEXT_PUBLIC_RESERVOIRE_API_KEY: process.env.NEXT_PUBLIC_RESERVOIRE_API_KEY,
  NEXT_PUBLIC_RESERVOIRE_COLLECTION_SET_ID: process.env.NEXT_PUBLIC_RESERVOIRE_COLLECTION_SET_ID,
  NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
}
