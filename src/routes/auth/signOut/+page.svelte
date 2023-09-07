<script>
	import { onMount } from 'svelte'
  import { signOut } from '@auth/sveltekit/client';

  export let data
  const authenticated = data.session

  onMount(() => {
    if(authenticated) signOut()
  })
</script>

{#if !authenticated}
  <main class='max-w-md'>
    <h1 class='font-extrabold text-xl md:text-3xl lg:text-4xl xl:text-5xl'>
      Thanks for trying out this demo!
    </h1>

    <p class='mt-6 font-light'>
      You are now officially signed out of your
      oauth account. Have a nice day!
    </p>

    <!--Learn More Section-->
    <section class='mt-10'>
      <h2 class='font-bold mb-3'>
        Going further
      </h2>

      <p class='mb-3 font-light'>
        If you would like to learn more about Svelte and SvelteKit,
        visit the official docs <a class='hover:underline text-red-600' href='https://svelte.dev/' rel='noopener' target="_blank">here</a> and <a class='hover:underline text-red-600' href='https://kit.svelte.dev/' rel='noopener' target="_blank">here</a>.
      </p>
    
      <p class='font-light'>
        If you would like to learn more about @auth/sveltekit,
        please visit the docs <a class='hover:underline text-red-600' href='https://authjs.dev/reference/sveltekit' rel='noopener' target="_blank">here</a>.
      </p>
    </section>

    <a class='inline-block border border-slate-300 p-1 px-4 pb-1.5 mt-10 rounded-xl hover:border-black transition-colors font-medium' href='/'>Home</a>
  </main>
{/if}