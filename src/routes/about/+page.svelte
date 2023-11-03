<script>
  import ListItem from "../../lib/components/ListItem.svelte";
  let listItems = ["crow", "gopher", "cat", "dog"];
  let secondList = [
    {name: "jake", species: "bird"},
    {name: "ella", species: "cow"},
    {name: "jill", species: "fish"},
    {name: "john", species: "turtle"}
  ]
</script>


<header>
  <h1 class="text-5xl text-center">About Page</h1>
</header>

<section>
  <h2>Our Example List</h2>
  <ul class="list-disc ml-5">
    {#each listItems as item}
    <ListItem bgColor="bg-red-200">{item}</ListItem>
    {/each}
  </ul>
</section>

<section>
  <h2>Our Second Example List</h2>
  <ul class="list-disc ml-5">
    {#each secondList as {name, species}}
    <ListItem bgColor="bg-green-200">{name} is a {species}</ListItem>
    {/each}
  </ul>
</section>