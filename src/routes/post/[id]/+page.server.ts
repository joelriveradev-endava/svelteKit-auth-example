import { API_URL } from '$env/static/private'
import { kv } from '@vercel/kv'

export const load = async ({ params }) => {
  const { id } = params

  const cachedPost = await kv.get<Post>(id)

  if(cachedPost){
    console.log('Found cached post, returning...')
    return { post: cachedPost }
  }

  const res = await fetch(`${API_URL}/posts/${id}`)
  const post: Post = await res.json()
  await kv.set(id, post)

  return { post }
}