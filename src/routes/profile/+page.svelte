<script lang='ts'>
  import { page } from '$app/stores'
  import { signOut } from '@auth/sveltekit/client'
  import { Button } from '../../components';
</script>

<main class='mx-10'>
  {#if $page.data.session?.user}
    { @const { name, email, image } = $page.data.session.user }

    <!--User Profile-->
    <div class='relative p-10 mx-auto max-w-3xl border border-slate-300 rounded-xl'>
      <small class='absolute right-4 mt-3 top-0'>Profile</small>

      <div class='flex flex-col'>
        {#if image}
          { @const altText = `${name}'s avatar.` }

          <img
            class='rounded-full'
            width={40}
            height={40}
            src={image}
            alt={altText}
            title={altText}
            aria-label={altText}
          />
        {/if}
        
        <h1 class='text-left font-bold text-2xl mt-3'>
          {name}
        </h1>
      </div>

      <small class='block mt-1'>
        {email}
      </small>

      <Button onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  {/if}
</main>