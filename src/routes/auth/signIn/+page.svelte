<script lang='ts'>
  import { signIn } from '@auth/sveltekit/client'
  import { Button } from '../../../components/index.js'
  export let data

  $: loading = ''

  const handleProviderClick = (id: string, callbackUrl: string) => {
    signIn(id, { callbackUrl })
    loading = id
  }
</script>

<main class='flex items-start'>
  {#if !data.session}
    <div class='max-w-2xl mx-auto mt-24 flex flex-col border border-slate-200 rounded-xl p-10 pb-16'>
      <h1 class='font-bold text-center mb-1.5 text-xl'>Verbx</h1>

      <p class='text-slate-700 text-sm text-center font-light'>
        Sign in to your Verbx account.
      </p>

      {#each data.providers as { id, label, callbackUrl } (id) }
        <Button
          classname='flex items-center text-capitalize'
          onClick={() => handleProviderClick(id, callbackUrl)}>
          
          {#if loading && loading === id }
            <img class='w-4 mr-4 animate-spin' src='/spinner.svg' alt='' />
            Authorizing with { label }
            {:else}
            <img class='w-4 mr-4' src='/{id}.svg' alt='' />
            Continue with { label }
          {/if}
        </Button>
      {/each}
    </div>
  {/if}
</main>