type IconProps = { className?: string };

function base(className?: string) {
  return className ?? "h-5 w-5";
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 2" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 8.8 4.2-1.6 7-4.6 7-8.8V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconChevron({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 13.6 8 19 9.4 13.6 11 12 16.5 10.4 11 5 9.4 10.4 8 12 2.5zM18.2 14.2l.7 2.2 2.1.7-2.1.7-.7 2.2-.7-2.2-2.1-.7 2.1-.7.7-2.2z" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 16.5 3.8 20.2A1 1 0 0 0 5 21.4L8.6 19.2A9 9 0 1 0 5 16.5z" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16.5 9 5 9-5" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7.5" />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function CardIcon({ name }: { name: "layers" | "check" | "search" }) {
  if (name === "check") return <IconCheck className="h-5 w-5" />;
  if (name === "search") return <IconSearch className="h-5 w-5" />;
  return <IconLayers className="h-5 w-5" />;
}
