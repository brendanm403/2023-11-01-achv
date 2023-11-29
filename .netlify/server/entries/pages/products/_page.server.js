import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data } = await supabase.from("new_collection_todos").select();
  return {
    newCollectionTodos: data ?? []
  };
}
export {
  load
};
