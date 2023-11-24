<script>
  import PageHeader from "../../lib/components/PageHeader.svelte";
  let headerContent = {
    pageTitle: "Blog",
    pageDescription: "This is a page for cool blog posts",
    bgColor: "bg-blue-400",
    flexContent: true
  }
  const name = "ash"

  let userLogin = true;

  function userLoginToggle() {
    userLogin = !userLogin;
  }

  function greet(e) {
    if (userLogin) {
      alert("hello world");
    }
  }
</script>

<PageHeader {...headerContent} >This is where the text from slot should appear</PageHeader>

{#if name === "hackermans"}
  <p>Don't hack me</p>
{:else}
  <p>Hello {name}</p>
{/if}

<button class="rounded-md bg-red-600 px-4 py-2 text-white transition duration-150 hover:bg-red-900" on:click = {greet}>Send Alert</button>
<button class="rounded-md bg-blue-600 px-4 py-2 text-white transition duration-150 hover:bg-blue-900" on:click = {userLoginToggle}>Toggle User Login</button>

<p>{userLogin}</p>