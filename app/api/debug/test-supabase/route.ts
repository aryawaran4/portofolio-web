import { supabase } from "@/lib/supabase/server";

export async function GET() {
  const { data, error } = await supabase.from("posts").select("*").limit(1);

  return Response.json({ data, error });
}
