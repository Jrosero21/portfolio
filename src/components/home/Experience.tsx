import { ArrowUpRight } from 'lucide-react';
import { credentials, experience } from '@/data/site';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Twelve years of turning operations into systems."
          intro="I started in invoicing, moved into analytics, spent seven years on an executive team, and now lead data while building the software myself."
        />

        <ol className="relative">
          {experience.map((r, i) => (
            <Reveal as="li" key={r.company} delay={0.04 * i} className="grid gap-4 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-10">
              <div>
                <div className="font-mono text-sm text-faint">{r.period}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {r.title}{' '}
                  <span className="text-muted">
                    ·{' '}
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 hover:text-fg">
                        {r.company}
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      r.company
                    )}
                  </span>
                </h3>
                {r.context && <div className="mt-1 font-mono text-xs text-faint">{r.context}</div>}
                <p className="text-pretty mt-3 text-muted">{r.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {r.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-fg/85">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-6 border-t border-line pt-10">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-faint">Certifications & education</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c.title} className="card rounded-xl p-5">
                <div className="font-medium">{c.title}</div>
                <div className="mt-1 text-sm text-muted">
                  {c.org} · <span className="font-mono text-xs text-faint">{c.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
