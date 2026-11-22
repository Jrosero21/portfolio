import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { earlierWork, featured, flagship, moreWork } from '@/data/projects';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';
import { ProjectLinks, ProjectMedia, StatusBadge, Tags } from '../ProjectBits';
import MoreWork from './MoreWork';

import FeatureCard, { caseHref } from './FeatureCard';

function Flagship() {
  const p = flagship;
  return (
    <Reveal>
      <article className="card group relative overflow-hidden rounded-3xl">
        <div className="glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="flex min-w-0 flex-col">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] font-medium text-accent-ink">Flagship</span>
              <StatusBadge status={p.status} />
            </div>
            <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              <Link href={caseHref(p)} className="after:absolute after:inset-0 after:content-['']">
                {p.title}
              </Link>
            </h3>
            <p className="mt-2 text-lg text-fg/90">{p.tagline}</p>
            <p className="text-pretty mt-4 leading-relaxed text-muted">{p.summary}</p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
              {p.metrics?.map((m) => (
                <div key={m.label} className="border-l border-line pl-4">
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight">{m.value}</dd>
                  <dd className="text-xs text-faint">{m.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Tags items={p.stack} max={9} />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-2 font-medium text-accent">
                Read the case study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
              <ProjectLinks project={p} />
            </div>
          </div>
          <div className="min-h-[340px] min-w-0">
            <ProjectMedia project={p} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Selected builds · 2026"
          title="Things I’ve built, running in production."
          intro="Built alongside my day job and consulting work: one large AI-run platform plus a handful of data and AI products. Each one runs against real users, real money or real outcomes."
        />

        <Flagship />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <FeatureCard key={p.slug} p={p} i={i} />
          ))}
        </div>

        <MoreWork projects={moreWork} />

        <Reveal className="mt-20">
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Earlier work · internships & foundations</h3>
          </div>
          <ul>
            {earlierWork.map((w) => (
              <li key={w.title} className="group flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-44 shrink-0 font-medium">{w.title}</span>
                <span className="flex-1 text-sm text-muted">{w.note}</span>
                <span className="flex items-center gap-5 text-sm">
                  <a href={w.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-fg">
                    Live <ArrowUpRight size={13} />
                  </a>
                  <a href={w.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-fg">
                    Code <ArrowUpRight size={13} />
                  </a>
                  <span className="font-mono text-xs text-faint">{w.year}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
