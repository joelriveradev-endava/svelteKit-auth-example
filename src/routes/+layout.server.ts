import type { LayoutServerLoad } from "./$types"
import { API_URL } from "$env/static/private"
import { kv } from "@vercel/kv"

export const load: LayoutServerLoad = async ({ locals }) => {
  const session = await locals.getSession()

  const cachedPosts = await kv.get<Post[]>('post')

  if(cachedPosts){
    return {
      session,
      posts: cachedPosts
    }
  }
  const res = await fetch(`${API_URL}/posts`)
  const posts: Post[] = await res.json()
  await kv.set('posts', posts)

  return { session, posts }
}