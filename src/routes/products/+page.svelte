<script>
  import PageHeader from "../../lib/components/PageHeader.svelte";
  let headerContent = {
    pageTitle: "Products",
    pageDescription: "This is a page with a products carousel",
    bgColor: "bg-orange-400"
  }

  export let data;
  let { newCollectionTodos } = data;
  console.log(newCollectionTodos);
</script>

<PageHeader {...headerContent}/>

<h1>{newCollectionTodos[0].title}</h1>