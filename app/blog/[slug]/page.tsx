import { Metadata } from 'next';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    if (!slug) return { title: "Blog Post" };

    const post = await client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{ title, "desc": pt::text(body[0...1]) }`,
        { slug }
    );

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Fusion AI Agency`,
        description: post.desc,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    if (!slug) notFound();

    const post = await client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      body,
    }`,
        { slug }
    );

    if (!post) notFound();

    return (
        <article className="min-h-screen bg-[#09090b] pt-32 pb-20 px-6 antialiased">            <div className="max-w-3xl mx-auto">
            {/* Breadcrumb / Category */}
            <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 rounded-full bg-[#d4ff33]/10 text-[#d4ff33] text-[10px] font-mono uppercase tracking-[0.2em] border border-[#d4ff33]/20">
                    Intelligence Report
                </span>
                <time className="text-zinc-500 text-xs font-mono">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Active Transmission'}
                </time>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12 leading-[1.1]">
                {post.title}
            </h1>

            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-16" />

            {/* The Content */}
            <div className="prose prose-invert prose-zinc max-w-none 
  // Force body text to light gray
  prose-p:!text-zinc-400 prose-p:text-lg prose-p:leading-relaxed
  
  // Force all headings to pure white
  prose-headings:!text-white prose-headings:font-bold prose-headings:tracking-tight
  
  // Force list items to light gray
  prose-li:!text-zinc-400
  
  // Style the strong/bold text to your brand neon green
  prose-strong:!text-[#d4ff33] prose-strong:font-bold">

                {/* Replace the old div/PortableText with this */}
                <div className="text-zinc-400 text-lg leading-relaxed space-y-6">
                    <PortableText
                        value={post.body}
                        components={{
                            block: {
                                // Forces all normal paragraphs to be visible gray
                                normal: ({ children }) => <p className="text-zinc-400">{children}</p>,
                                // Forces all headings to be pure white
                                h1: ({ children }) => <h1 className="text-4xl font-bold text-white mt-12 mb-4">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-3xl font-bold text-white mt-10 mb-4">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h3>,
                            },
                            marks: {
                                // Forces bold text to be your neon brand color
                                strong: ({ children }) => <strong className="font-bold text-[#d4ff33]">{children}</strong>,
                                link: ({ children, value }) => (
                                    <a href={value.href} className="text-[#d4ff33] underline hover:text-white transition-colors">
                                        {children}
                                    </a>
                                ),
                            },
                            list: {
                                bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 text-zinc-400">{children}</ul>,
                                number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 text-zinc-400">{children}</ol>,
                            },
                        }}
                    />
                </div>                </div>

            {/* Dynamic CTA */}
            <div className="mt-24 p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 text-center relative overflow-hidden group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#d4ff33]/30 to-transparent" />
                <h3 className="text-2xl font-bold text-white mb-4">Integrate your own Jessica.</h3>
                <p className="text-zinc-500 mb-8 max-w-md mx-auto">We build autonomous neural voice agents for NYC's most forward-thinking dental and medical practices.</p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-[#d4ff33] transition-all hover:scale-105">
                    Initialize Consultation
                </button>
            </div>
        </div>
        </article>
    );
}