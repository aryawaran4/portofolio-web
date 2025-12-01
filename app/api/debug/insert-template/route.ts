import { supabase } from "@/lib/supabase/server";

export async function GET() {
  await supabase.from("blog_templates").insert({
    name: "Tech Case Study",
    structure: {
      sections: [
        "Introduction",
        "Problem",
        "Solution",
        "Technical Breakdown",
        "Results",
        "Conclusion",
      ],
      tone: "professional, analytical",
      seo_keywords: ["technology", "case study"],
    },
  });

  return Response.json({ status: "ok" });
}
