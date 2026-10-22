import Link from "next/link";

export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#4FD574" />
      <path
        d="M12.2 11h8.4c3.7 0 6.1 2 6.1 4.9 0 1.9-1 3.4-2.7 4.2 2.1.7 3.5 2.4 3.5 4.6 0 3.2-2.7 5.3-6.9 5.3h-8.4V11zm3.1 3v4.1h4.7c1.6 0 2.6-.8 2.6-2.05S21.6 14 20 14h-4.7zm0 7v4.6H21c1.9 0 3.1-.9 3.1-2.3s-1.2-2.3-3.1-2.3h-5.7z"
        fill="#0F1A1C"
      />
    </svg>
  );
}

export function Logo({ tone = "ink" }: { tone?: "plate" | "plain" | "ink" }) {
  const plate =
    tone === "plate"
      ? "bg-white py-1.5 pl-1.5 pr-4 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
      : "py-1 pr-2";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 rounded-full ${plate}`} aria-label="Beverion Systems home">
      <Mark />
      <span className="leading-none">
        <span className={`block text-[15px] font-bold tracking-[-0.03em] ${tone === "plain" ? "text-white" : "text-heading"}`}>
          BEVERION
        </span>
        <span className={`mt-1 block text-[9px] font-semibold tracking-[0.22em] ${tone === "plain" ? "text-accent" : "text-[#1c8f45]"}`}>SYSTEMS</span>
      </span>
    </Link>
  );
}
