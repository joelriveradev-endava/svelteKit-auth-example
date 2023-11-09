<script lang='ts'>
	import type { PageData } from "./$types"
  export let data: PageData

  const date = new Date().toLocaleString('en', {
    weekday: 'long',
    day: '2-digit',
    year: 'numeric'
  })
</script>

<main class='w-full'>
  <div class='max-w-xl'>
    <small class='text-small mb-2 block'>{date}</small>

    <h1 class='font-extrabold text-xl md:text-3xl lg:text-4xl capitalize'>
      {data.post.title}
    </h1>
  
    <p class='text-neutral-700 mt-4 font-light text-sm lg:text-lg'>
      {data.post.body}
    </p>
  </div>
</main>