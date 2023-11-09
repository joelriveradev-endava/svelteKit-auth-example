<script lang='ts'>
  import { page } from '$app/stores'
</script>

<header class='flex items-center justify-between p-8 lg:px-20 font-medium'>
  <a href='/'>SvelteKit Auth</a>

  {#if $page.data.session?.user}
    { @const { image, name } = $page.data.session?.user }
    { @const altText = `${name}'s avatar.` }
        
    <div class='flex items-center'>
      <img
        width='13'
        height='13'
        class='rounded-full mr-2'
        src={image}
        alt={altText}
        title={altText}
      />

      <a href='/profile' class='font-normal text-xs'>
        Hello, <strong>{name}</strong>!
      </a>
    </div>
  {/if}
</header>