import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import Reveal from '../Reveal';
import { ProjectLinks, ProjectMedia, StatusBadge, Tags } from '../ProjectBits';

export const caseHref = (p: Project) => `/work/${p.slug}/`;

export default function FeatureCard({ p, i = 0 }: { p: Project; i?: number }) {
  const hasCase = !!p.sections?.length;
  const href = hasCase ? caseHref(p) : p.links?.live;
  return (
    <Reveal delay={(i % 2) * 0.08} className="h-full min-w-0">
      <article className="card group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 transition-colors hover:border-line-strong sm:p-6">
        <div className="aspect-[16/10] w-full">
          <ProjectMedia project={p} />
        </div>
        <div className="mt-6 flex items-center justify-between gap-3">
          <StatusBadge status={p.status} />
          <span className="font-mono text-xs text-faint">{p.year}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
          {href ? (
            hasCase ? (
              <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                {p.title}
              </Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:content-['']">
                {p.title}
              </a>
            )
          ) : (
            p.title
          )}
        </h3>
        <p className="mt-1.5 text-fg/85">{p.tagline}</p>
        <p className="text-pretty mt-3 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
        {p.metrics && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {p.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="text-sm">
                <span className="font-semibold text-fg">{m.value}</span> <span className="text-faint">{m.label}</span>
              </div>
            ))}
          </div>
        )}
        <div className="mt-5">
          <Tags items={p.stack} max={5} />
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
          <ProjectLinks project={p} />
          {hasCase && (
            <span className="inline-flex shrink-0 items-center gap-1 text-sm text-accent">
              Case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      </article>
    </Reveal>
  );
}

