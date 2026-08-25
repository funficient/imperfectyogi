import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-10 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold uppercase tracking-[0.18em] text-foreground">ImperfectYogi</p>
          <p className="mt-2 max-w-md">Yin, movement and conscious travel experiences designed to help you slow down and reconnect.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/retreats" className="hover:text-foreground">Retreats</Link>
          <Link href="/coaching" className="hover:text-foreground">Coaching</Link>
          <Link href="mailto:hello@imperfectyogi.com" className="hover:text-foreground">Email</Link>
        </div>
      </div>
    </footer>
  );
}
