<script>
  import MessageBox from "../lib/components/MessageBox.svelte";
  import PageHeader from "../lib/components/PageHeader.svelte";
  let dailyContent = "demos 2023-11-02";
  let obj = {title:"the message title", description: "the description"}
  let messageForTheBox =[
    {title: "bob", description: "33 years old"},
    {title: "doug", description: "30 years old"},
    {title: "jane", description: "25 years old"}
  ]; 
  let headerContent = {
    pageTitle: "Home",
    pageDescription: "this is the home page",
    bgColor: "bg-red-400"
  }
  export let data;
  let { countries } = data;
  console.log(countries);
</script>

<PageHeader {...headerContent}/>

<h1 class="text-5xl">Svelte {dailyContent}</h1>

<MessageBox title="Hello" description="dsfsdf sdfsdf sdfsdf sdfsdf sdfsdf"/>

<MessageBox title={obj.title} description={obj.description}/>

 <!-- this passes the whole object and it sorts itself out because the object that was passed has the same property keys  as the component file  -->
<MessageBox {...obj} />

<h2>loop example</h2>

{#each messageForTheBox as box}
  <MessageBox {...box} />
{/each}

<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
</ul>

<!-- sdfsdfsdfsdfsd -->