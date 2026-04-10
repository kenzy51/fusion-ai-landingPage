import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const dynamic = "force-dynamic";

export default async function BlogIndex() {
  // Fetch all posts from Sanity
  const posts = await client.fetch(groq`*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt
  }`);

  return (
    <main className="min-h-screen bg-[#09090b] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 tracking-tighter">
          Neural Systems <span className="text-[#d4ff33]">Insights</span>
        </h1>

        <div className="grid gap-6">
          {posts.map((post: any) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#d4ff33]/50 transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-[#d4ff33] transition-colors">
                    {post.title}
                  </h2>
              
                </div>
                <div className="text-[#d4ff33] opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main> // Ensure this line has the ">" and isn't cut off
  );
}