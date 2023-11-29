import { s as supabase } from "../../chunks/supabaseClient.js";
async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? []
  };
}
export {
  load
};
