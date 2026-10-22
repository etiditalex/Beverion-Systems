"use client";

import { FormEvent, useState } from "react";
import { company, interests } from "@/lib/content";

export function InquiryForm({
  defaultInterest = "Web design and development",
  submitLabel = "Send the note",
}: {
  defaultInterest?: string;
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const organization = String(data.get("organization") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nInterest: ${interest}\n\n${message}`,
    );
    const subject = encodeURIComponent(`Beverion inquiry: ${interest}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-copy">Name</span>
          <input required name="name" autoComplete="name" className="h-12 w-full rounded-xl border border-black/8 bg-mist px-3 text-heading outline-none focus:border-accent" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-copy">Email</span>
          <input required type="email" name="email" autoComplete="email" className="h-12 w-full rounded-xl border border-black/8 bg-mist px-3 text-heading outline-none focus:border-accent" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-copy">Organization</span>
          <input name="organization" autoComplete="organization" className="h-12 w-full rounded-xl border border-black/8 bg-mist px-3 text-heading outline-none focus:border-accent" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-copy">Interest</span>
          <select name="interest" defaultValue={defaultInterest} className="h-12 w-full rounded-xl border border-black/8 bg-mist px-3 text-heading outline-none focus:border-accent">
            {interests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm">
        <span className="mb-1.5 block text-copy">What do you need?</span>
        <textarea required name="message" rows={5} className="w-full rounded-xl border border-black/8 bg-mist px-3 py-3 text-heading outline-none focus:border-accent" />
      </label>
      <button type="submit" className="mt-5 inline-flex h-12 items-center rounded-xl bg-accent px-5 text-sm font-semibold text-navy hover:bg-[#3ebe68]">
        {submitLabel}
      </button>
      <p className="mt-3 text-xs leading-5 text-copy">
        This opens your email app with the note addressed to {company.email}. Nothing is stored on this site.
      </p>
      {sent ? (
        <p className="mt-3 text-sm text-[#178a3e]" role="status">
          If your email app did not open, write us directly at {company.email}.
        </p>
      ) : null}
    </form>
  );
}
