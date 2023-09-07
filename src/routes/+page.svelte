<script>
  export let data

  const authenticated = data.session
  const href = authenticated ? '/auth/signOut' : '/auth/signIn'
</script>

<main class='max-w-xl'>
  <h1 class='font-extrabold text-xl md:text-3xl lg:text-4xl xl:text-5xl'>
    Welcome to the SvelteKit Auth Example!
  </h1>

  <p class='text-slate-600 mt-6 font-light text-sm lg:text-lg'>
    This is a simple, lightweight example of how 
    to implement a simple oauth solution for 
    SvelteKit apps.
  </p>

  <a {href} class='inline-block border border-slate-300 p-1 px-4 pb-1.5 mt-10 rounded-xl hover:border-black transition-colors font-medium'>
    {#if authenticated}
      Sign Out
      {:else}
      Sign In
    {/if}
  </a>
</main>