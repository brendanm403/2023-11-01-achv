import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from '$env/static/private';

export const supabase = createClient('https://inistyhyitydmhllbzuq.supabase.co', SUPABASE_KEY);