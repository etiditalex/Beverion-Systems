import Link from "next/link";
import { IconChat } from "./Icons";

export function TalkButton() {
  return (
    <Link
      href="/contact"
      aria-label="Talk to Beverion"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-navy shadow-[0_12px_30px_rgba(79,213,116,0.4)] transition hover:bg-[#3ebe68]"
    >
      <IconChat className="h-6 w-6" />
    </Link>
  );
}
