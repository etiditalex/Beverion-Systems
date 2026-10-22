import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Note" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const more = posts.filter((item) => item.slug !== post.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#178a3e]">{post.category}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-heading">{post.title}</h1>
      <p className="mt-3 text-sm text-copy">{post.date} · {post.read}</p>
      <div className="mt-8 space-y-5 text-base leading-8 text-copy">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-12 border-t border-black/8 pt-8">
        <h2 className="text-lg font-semibold text-heading">More notes</h2>
        <ul className="mt-4 space-y-2">
          {more.map((item) => (
            <li key={item.slug}>
              <Link href={`/blog/${item.slug}`} className="text-sm text-[#178a3e] hover:text-heading">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
