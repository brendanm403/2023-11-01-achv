<script>
  export let data;
  let { blogPosts } = data;
  console.log(blogPosts);
</script>

{#each blogPosts as post}
  <h1 class="text-3xl my-2">{post.title}</h1>
  <h2 class="text-xl mb-2">{post.summary}</h2>
  <p class="mb-2">{post.author}</p>
  <p class="mb-2">{post.date_created}</p>
  <p class="mb-2">{post.tags}</p>
  <p class="mb-2">{post.content}</p>
{/each}