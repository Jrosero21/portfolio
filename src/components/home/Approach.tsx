import { principles, stack } from '@/data/site';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';

export default function Approach() {
  return (
    <section id="approach" className="border-y border-line bg-bg-elev py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How I build"
          title="Autonomy is earned by the guardrails around the model."
          intro="Four rules carry through every project above. They’re why I can give AI real responsibility and still sleep at night."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.06} className="bg-surface p-6 sm:p-8">
              <div className="font-mono text-xs text-accent">0{i + 1}</div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="text-pretty mt-3 leading-relaxed text-muted">{p.body}</p>
              <div className="mt-5 font-mono text-[11px] uppercase tracking-wider text-faint">in practice → {p.ref}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-faint">Toolbox</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stack.map((g) => (
              <div key={g.group}>
                <div className="mb-3 text-sm font-medium">{g.group}</div>
                <ul className="space-y-1.5 text-sm text-muted">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
