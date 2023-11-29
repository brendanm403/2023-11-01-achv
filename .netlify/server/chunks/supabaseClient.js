import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluaXN0eWh5aXR5ZG1obGxienVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NTIzNDUsImV4cCI6MjAxNjQyODM0NX0.fsBIeVKnfYj5PHOG0EG0Z9HAln_4IZbE7RVTef52SAQ";
const SECRET_SUPABASE_URL = "https://inistyhyitydmhllbzuq.supabase.co";
const supabase = createClient(SECRET_SUPABASE_URL, SUPABASE_KEY);
export {
  supabase as s
};
