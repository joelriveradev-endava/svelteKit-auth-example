import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals, url }) => {
  const session = await locals.getSession()
  const callbackUrl = new URL(url).searchParams.get('originalUrl') ?? '/profile'

  return {
    session,
    // You can insert other providers here
    // like Facebook, Google, Apple, etc.
    // https://authjs.dev/reference/core/providers
    providers: [
      {
        id: 'github',
        label: 'GitHub',
        callbackUrl
      },
    ]
  }
}