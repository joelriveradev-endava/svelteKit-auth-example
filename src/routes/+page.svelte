<script lang='ts'>
  import { stagger, animate, spring } from 'motion'
  export let data

  const authenticated = data.session
  const href = authenticated ? '/auth/signOut' : '/auth/signIn'
  
  let postsRef: HTMLDivElement

  $: {
    if(postsRef){
      animate(
        '.post', {
          y: [-50, 0],
          opacity: [0, 1],
          scale: [0.8, 1.2, 1],
        }, { delay: stagger(0.11), easing: spring() }
      )
    }
  }
</script>

<main class='w-full'>
  <div class='md:max-w-xl'>
    <h1 class='text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-5xl'>
      Welcome to the SvelteKit Auth Example!
    </h1>
  
    <p class='mt-6 text-sm font-light text-slate-600 lg:text-lg'>
      This is a simple, lightweight example of how 
      to implement a simple oauth solution for 
      SvelteKit apps.
    </p>
  </div>

  <a {href} class='inline-block border border-slate-300 p-1 px-4 pb-1.5 mt-10 rounded-xl hover:border-black transition-colors font-medium'>
    {#if authenticated}
      Sign Out
      {:else}
      Sign In
    {/if}
  </a>

  <section class='w-full mt-28 rounded-3xl pt-10'>
    <h2 class='font-bold text-2xl'>Latest Posts</h2>

    {#if data.posts}
      {@const { posts } = data}

      <div class='w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5' bind:this={postsRef}>
        {#each posts as post}
          <a href='/post/{post.id}' class='post'>
            <div class='max-w-md rounded-xl border border-neutral-100 p-5 pb-6 transition-all hover:border-black hover:shadow-lg hover:shadow-gray-200'>
              <span class='block font-semibold mb-3 capitalize'>
                {post.title}
              </span>

              <p class='antialiased'>{post.body}</p>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </section>
</main>