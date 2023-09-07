<script lang='ts'>
  import clsx from 'clsx'

  export let onClick = () => {}
  export let classname = ''
</script>

<button
  type='button'
  class={
    clsx(
      'border border-slate-300 p-1 px-4 pb-1.5 mt-10 rounded-xl hover:border-black transition-colors font-medium',
      classname
    )
  }
  on:click={onClick}>
  <slot />
</button>