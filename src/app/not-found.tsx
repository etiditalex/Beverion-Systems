import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#178a3e]">404</p>
      <h1 className="mt-3 text-4xl font-bold text-heading">That page is not on this site.</h1>
      <p className="mt-3 text-copy">The address may have changed. Start from the home page or the service list.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="inline-flex h-11 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-navy">Home</Link>
        <Link href="/services" className="inline-flex h-11 items-center rounded-xl border border-black/10 px-4 text-sm font-semibold text-heading">Services</Link>
      </div>
    </section>
  );
}
