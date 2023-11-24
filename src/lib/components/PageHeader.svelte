<script>
  export let pageTitle = "placeholder title";
  export let pageDescription = "placeholder description";
  export let bgColor = "bg-blue-400";
  export let flexContent = false;
</script>


<header class="{bgColor} flex flex-col bg-blue-600 py-12 text-white">
  <h1 class="text-3xl lg:text-5xl mx-auto my-2">{pageTitle}</h1>
  <p class="text-lg lg:text-xl mx-auto my-2">{pageDescription}</p>
  {#if flexContent === true}
  <div class="mx-auto my-2">
    <slot />
  </div>
  {/if}
</header>