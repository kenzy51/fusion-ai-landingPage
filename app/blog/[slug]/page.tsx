import { Metadata, ResolvingMetadata } from 'next';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Dynamic SEO Generation
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      description,
      "ogImage": mainImage.asset->url
    }`,
    { slug }
  );

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description || `Deep dive into ${post.title} by Fusion AI.`,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.ogImage ? [{ url: post.ogImage }] : [],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // 2. Fetch Detailed Post Data
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      description,
      body,
      "mainImage": mainImage.asset->url,
      "alt": mainImage.alt
    }`,
    { slug }
  );

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-[#09090b] pt-32 pb-24 px-6 selection:bg-[#d4ff33] selection:text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Navigation */}
        <Link 
          href="/blog" 
          className="group flex items-center gap-2 text-zinc-500 hover:text-[#d4ff33] transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Archive
        </Link>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="px-3 py-1 rounded-full bg-[#d4ff33]/10 text-[#d4ff33] text-[10px] font-mono uppercase tracking-[0.2em] border border-[#d4ff33]/20">
            Intelligence Report
          </span>
          <div className="h-px w-8 bg-zinc-800" />
          <time className="text-zinc-500 text-xs font-mono">
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'Transmission Active'}
          </time>
        </div>

        {/* Title Section */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.95]">
          {post.title}
        </h1>
        
        <p className="text-xl text-zinc-400 mb-16 leading-relaxed max-w-2xl font-light">
          {post.description}
        </p>

        {post.mainImage && (
          <div className="relative w-full aspect-[21/9] mb-20 rounded-[2.5rem] overflow-hidden border border-white/10 group">
            <img 
              src={post.mainImage} 
              alt={post.alt || post.title} 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            {/* Ambient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
          </div>
        )}

        {/* Content Area */}
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-invert prose-zinc max-w-none">
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => <p className="text-zinc-400 text-lg leading-relaxed mb-8">{children}</p>,
                  h2: ({ children }) => <h2 className="text-3xl font-bold text-white mt-16 mb-6 tracking-tight">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight">{children}</h3>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-[#d4ff33] pl-6 my-12 italic text-white text-xl font-light leading-relaxed">
                      {children}
                    </blockquote>
                  ),
                },
                marks: {
                  strong: ({ children }) => <strong className="font-bold text-[#d4ff33]">{children}</strong>,
                  link: ({ children, value }) => (
                    <a href={value.href} className="text-[#d4ff33] underline underline-offset-4 hover:text-white transition-colors">
                      {children}
                    </a>
                  ),
                  code: ({ children }) => (
                    <code className="bg-white/5 text-[#d4ff33] px-1.5 py-0.5 rounded font-mono text-sm border border-white/10">
                      {children}
                    </code>
                  ),
                },
                list: {
                  bullet: ({ children }) => <ul className="list-disc pl-6 space-y-4 mb-8 text-zinc-400">{children}</ul>,
                },
              }}
            />
          </div>

          <div className="mt-32 p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem]">
            <div className="bg-[#09090b] p-12 rounded-[2.9rem] text-center relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#d4ff33] opacity-[0.03] blur-[100px]" />
              
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tighter">
                Ready to deploy your <br />
                <span className="text-[#d4ff33]">Neural Infrastructure?</span>
              </h3>
              <p className="text-zinc-500 mb-10 max-w-sm mx-auto text-sm leading-relaxed">
                Join the elite practices in NYC utilizing Fusion AI to automate their growth cycles.
              </p>
              
              <Link href="/contact">
                <button className="group relative bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-[#d4ff33] transition-all hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Initialize Strategy Call</span>
                  <div className="absolute inset-0 bg-[#d4ff33] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </Link>
              
              <p className="mt-8 text-[10px] text-zinc-700 font-mono uppercase tracking-[0.3em]">
                Secure Transmission // Fully Encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}