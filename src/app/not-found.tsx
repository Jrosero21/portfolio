import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-4 pt-24 sm:px-6">
      <div className="font-mono text-sm text-accent">404</div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">This page didn’t ship.</h1>
      <p className="mt-4 text-lg text-muted">The link may be old. The work lives on the home page.</p>
      <Link href="/" className="mt-8 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink">
        Back home
      </Link>
    </section>
  );
}
