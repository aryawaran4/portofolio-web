export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: "draft" | "scheduled" | "published";
  generated_at: string | null;
  published_at: string | null;
  ai_context: any;
  template_used: string | null;
  tags: string[];
  created_at: string;
  updated_at: string;
};

export type BlogTemplate = {
  id: string;
  name: string;
  structure: any;
  created_at: string;
};

export type GenerationJob = {
  id: string;
  context_data: any;
  template_id: string;
  schedule_time: string;
  status: "pending" | "running" | "done" | "failed";
  post_id: string | null;
  created_at: string;
};
