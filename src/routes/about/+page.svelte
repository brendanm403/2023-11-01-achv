<script>
  import ListItem from "$lib/components/ListItem.svelte";
  // the dollar sign is a cool trick to avoid using ../ to navigate file paths //
  import Card from "$lib/components/Card.svelte";
  import PageHeader from "../../lib/components/PageHeader.svelte";
  let listItems = ["crow", "gopher", "cat", "dog"];
  let secondList = [
    {name: "jake", species: "bird"},
    {name: "ella", species: "cow"},
    {name: "jill", species: "fish"},
    {name: "john", species: "turtle"}
  ]
  let headerContent = {
    pageTitle: "About",
    pageDescription: "This is a page to learn about the site",
    bgColor: "bg-green-400"
  }
</script>

<PageHeader {...headerContent}/>

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

<Card />