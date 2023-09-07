import { SvelteKitAuth } from "@auth/sveltekit"
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private'
import GitHub from "@auth/core/providers/github"

export const handle = SvelteKitAuth({
  pages: {
    'signIn': '/auth/signIn',
    'signOut': '/auth/signOut'
  },
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: ({ session }) => {
      console.log({ session })
      return session
    }
  }
});