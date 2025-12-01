'use client';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Large Language Models',
    excerpt: 'A comprehensive guide to understanding and implementing LLMs in your projects.',
    date: 'November 20, 2025',
    readTime: '5 min read',
    category: 'AI',
    image: '/blog/llm-guide.jpg',
    slug: 'getting-started-with-llms',
  },
  {
    id: 2,
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Best practices and patterns for building production-ready Next.js applications.',
    date: 'November 15, 2025',
    readTime: '8 min read',
    category: 'Web Development',
    image: '/blog/nextjs-scalable.jpg',
    slug: 'nextjs-scalable-apps',
  },
  {
    id: 3,
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring emerging trends and how AI is transforming the web development landscape.',
    date: 'November 10, 2025',
    readTime: '6 min read',
    category: 'AI',
    image: '/blog/ai-future.jpg',
    slug: 'ai-future-web-dev',
  },
  {
    id: 4,
    title: 'TypeScript Best Practices for Large Projects',
    excerpt: 'Learn how to leverage TypeScript effectively in enterprise-scale applications.',
    date: 'November 5, 2025',
    readTime: '7 min read',
    category: 'Development',
    image: '/blog/typescript-tips.jpg',
    slug: 'typescript-best-practices',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="min-h-screen bg-black py-20 px-4 md:px-8 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="typ-h2 font-bold text-theme mb-4 text-center tracking-tight">Latest Blog Posts</h2>
        <p className="typ-p text-theme-muted text-center mb-16 font-light">Articles about AI, web development, and technology</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 hover:border-white/40 transition duration-300 overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-white/20"
            >
              <div className="h-48 bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center group-hover:from-white/30 group-hover:to-white/10 transition duration-300">
                <span className="text-white text-lg font-semibold text-center px-4 group-hover:text-white">{post.title}</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 backdrop-blur-md bg-white/10 text-gray-100 text-xs font-semibold rounded-full border border-white/20">
                    {post.category}
                  </span>
                  <span className="text-gray-300 text-xs">{post.readTime}</span>
                </div>
                <h3 className="typ-h3 font-bold text-theme mb-2">{post.title}</h3>
                <p className="typ-p text-theme-muted mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-white hover:text-gray-200 font-semibold transition duration-300 uppercase text-xs tracking-wide"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition duration-300 inline-block uppercase tracking-wide text-sm border border-white"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
