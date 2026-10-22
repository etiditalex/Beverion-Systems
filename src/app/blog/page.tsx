import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from Beverion Systems on search, ticketing, voting, and partner products.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from the practice."
        text="Short writing on how Beverion thinks about search, platforms, and partnerships. These are our positions, not client case studies."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-[28px] border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-6 transition hover:border-accent/50 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#178a3e]">{post.category}</p>
            <h2 className="mt-2 text-2xl font-semibold text-heading">{post.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-copy">{post.excerpt}</p>
            <p className="mt-4 text-xs text-copy">{post.date} · {post.read}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
