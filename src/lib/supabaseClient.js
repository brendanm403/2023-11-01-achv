import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY, SECRET_SUPABASE_URL } from '$env/static/private';

export const supabase = createClient(SECRET_SUPABASE_URL, SUPABASE_KEY);