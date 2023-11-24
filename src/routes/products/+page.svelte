<script>
  import PageHeader from "../../lib/components/PageHeader.svelte";
  let headerContent = {
    pageTitle: "Products",
    pageDescription: "This is a page with a products carousel",
    bgColor: "bg-orange-400"
  }
</script>

<PageHeader {...headerContent}/>