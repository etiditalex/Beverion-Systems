import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return { title: product.title, description: product.summary };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <section className="border-b border-black/8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#178a3e]">{product.kicker}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.035em] text-heading md:text-5xl">{product.title}</h1>
            <p className="mt-4 text-lg leading-8 text-copy">{product.summary}</p>
            <Link href="/contact" className="mt-6 inline-flex h-12 items-center rounded-xl bg-accent px-5 text-sm font-semibold text-navy">
              Ask about {product.title}
            </Link>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-black/8">
            <Image src={product.image} alt={product.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold text-heading">What the system covers</h2>
        <ul className="mt-6 space-y-3">
          {product.points.map((point) => (
            <li key={point} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] px-4 py-3 text-sm text-copy">
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-6 text-copy">
          Payments, email, and identity connect through the integration practice. We scope those with you instead of pretending a default checkout is already live.
        </p>
      </section>
    </>
  );
}
