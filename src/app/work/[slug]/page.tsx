import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/projects';
import { ProjectLinks, ProjectMedia, StatusBadge, Tags } from '@/components/ProjectBits';
import Reveal from '@/components/Reveal';

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = caseStudies.find((c) => c.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title}: ${p.tagline.replace(/\.$/, '')}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}/` },
    openGraph: { title: `${p.title} · Jonny Rosero`, description: p.summary, url: `/work/${p.slug}/` },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) notFound();
  const p = caseStudies[idx];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="relative">
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-x-0 top-0 h-[520px]" aria-hidden />
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" aria-hidden />

      <header className="relative mx-auto max-w-5xl px-4 pt-28 sm:px-6 sm:pt-36">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
          <ArrowLeft size={15} /> All work
        </Link>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <StatusBadge status={p.status} />
          <span className="font-mono text-xs text-faint">{p.year}</span>
        </div>
        <h1 className="text-balance mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">{p.title}</h1>
        <p className="text-pretty mt-4 max-w-3xl text-xl text-muted sm:text-2xl">{p.tagline}</p>

        <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">Role</dt>
            <dd className="mt-1.5 text-sm">{p.role}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">Links</dt>
            <dd className="mt-1.5">
              <ProjectLinks project={p} size="md" />
            </dd>
          </div>
        </dl>
      </header>

      <div className="relative mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <Reveal className={p.image ? 'aspect-[16/10]' : 'min-h-[300px]'}>
          <ProjectMedia project={p} priority />
        </Reveal>
        {!p.image && (
          <p className="mt-3 text-center font-mono text-[11px] text-faint">Illustrative view. The production UI and data are private.</p>
        )}
      </div>

      {p.metrics && (
        <div className="mx-auto mt-14 max-w-5xl px-4 sm:px-6">
          <dl className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line ${p.metrics.length === 4 ? 'md:grid-cols-4' : p.metrics.length === 3 ? 'md:grid-cols-3' : ''}`}>
            {p.metrics.map((m) => (
              <div key={m.label} className="bg-surface p-5 sm:p-6 [&:last-child:nth-child(odd)]:col-span-2 md:[&:last-child:nth-child(odd)]:col-span-1">
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{m.value}</dd>
                <dd className="mt-1 text-xs text-faint sm:text-sm">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        {p.sections?.map((s) => (
          <Reveal as="section" key={s.heading} className="mb-14 last:mb-0">
            <h2 className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl">{s.heading}</h2>
            <div className="space-y-5 text-[17px] leading-[1.75] text-fg/85">
              {s.body.map((para) => (
                <p key={para.slice(0, 40)} className="text-pretty">
                  {para}
                </p>
              ))}
            </div>
            {s.bullets && (
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[16px] leading-relaxed text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}

        <section className="mt-16 border-t border-line pt-10">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-faint">Stack</h2>
          <Tags items={p.stack} />
        </section>
      </div>

      <div className="border-t border-line">
        <Link href={`/work/${next.slug}/`} className="group mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 py-12 sm:px-6 sm:py-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Next case study</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">{next.title}</div>
            <div className="mt-1 text-muted">{next.tagline}</div>
          </div>
          <ArrowRight size={28} className="shrink-0 text-accent transition-transform group-hover:translate-x-1.5" />
        </Link>
      </div>
    </article>
  );
}
