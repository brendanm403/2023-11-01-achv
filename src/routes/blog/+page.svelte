<script>
  import PageHeader from "../../lib/components/PageHeader.svelte";
  let headerContent = {
    pageTitle: "Blog",
    pageDescription: "This is a page for cool blog posts",
    bgColor: "bg-blue-400"
  }
</script>

<PageHeader {...headerContent}/>