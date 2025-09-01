import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ykpeboxqebampitv.supabase.co";  // 🔹 your Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // 🔹 your anon/public key

export const supabase = createClient(supabaseUrl, supabaseKey);