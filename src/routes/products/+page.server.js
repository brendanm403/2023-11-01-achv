import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("new_collection_todos").select();
  return {
    newCollectionTodos: data ?? [],
  };
}