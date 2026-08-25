import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'Coaching', href: '/coaching' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            IY
          </span>
          ImperfectYogi
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="mailto:hello@imperfectyogi.com" className="btn-primary text-sm px-4 py-2">
          Enquire
        </Link>
      </div>
    </header>
  );
}
