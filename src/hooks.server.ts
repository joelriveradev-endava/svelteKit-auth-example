import { SvelteKitAuth } from "@auth/sveltekit"

import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_ID_DEV,
  GITHUB_CLIENT_SECRET,
  GITHUB_CLIENT_SECRET_DEV,
  NODE_ENV
} from '$env/static/private'

import GitHub from "@auth/core/providers/github"

const dev = NODE_ENV === 'development'

const githubCredentials = {
  clientId: dev ? GITHUB_CLIENT_ID_DEV : GITHUB_CLIENT_ID,
  clientSecret: dev ? GITHUB_CLIENT_SECRET_DEV : GITHUB_CLIENT_SECRET
}

export const handle = SvelteKitAuth({
  pages: {
    'signIn': '/auth/signIn',
    'signOut': '/auth/signOut'
  },
  providers: [
    GitHub(githubCredentials)
  ],
  callbacks: {
    session: ({ session }) => {
      console.log({ session })
      return session
    }
  }
});