<script>
  export let data;
  let { newCollectionTodos } = data;
  console.log(newCollectionTodos);
</script>

<h1>{newCollectionTodos[0].title}</h1>