<script>
  export let data

  const authenticated = data.session
  const href = authenticated ? '/auth/signOut' : '/auth/signIn'
</script>

<main class='w-full'>
  <div class='md:max-w-xl'>
    <h1 class='font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
      Welcome to the SvelteKit Auth Example!
    </h1>
  
    <p class='text-slate-600 mt-6 font-light text-sm lg:text-lg'>
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

      <div class='w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {#each posts as post}
          <a href='/post/{post.id}'>
            <div class='max-w-md border border-neutral-100 rounded-xl p-5 pb-6 hover:border-black hover:shadow-lg hover:shadow-gray-200 transition-all'>
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