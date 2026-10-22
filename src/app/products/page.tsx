import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description: "Beverion Tickets, Beverion Ballot, and a partner shelf for products we promote.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Ticketing, voting, and a shelf for partner products."
        text="Two platforms carry the Beverion name. Everything else we promote belongs to a partner, and we say so."
      />
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6">
        {products.map((product, index) => (
          <article key={product.slug} className="grid items-center gap-6 overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] lg:grid-cols-2">
            <div className={`relative min-h-72 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image src={product.image} alt={product.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#178a3e]">{product.kicker}</p>
              <h2 className="mt-2 text-3xl font-bold text-heading">{product.title}</h2>
              <p className="mt-3 text-sm leading-6 text-copy">{product.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-copy">
                {product.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={`/products/${product.slug}`} className="mt-6 inline-flex h-11 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-navy">
                Product detail
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
