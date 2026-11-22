import { BarChart3, Bot, Database } from 'lucide-react';
import { capabilities } from '@/data/site';
import Reveal from '../Reveal';

const icons = [BarChart3, Database, Bot];

export default function Capabilities() {
  return (
    <section aria-label="What I do" className="pb-8">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
        {capabilities.map((c, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={c.title} delay={i * 0.06} className="card rounded-2xl p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon size={20} />
              </div>
              <h2 className="mt-5 text-lg font-semibold tracking-tight">{c.title}</h2>
              <p className="text-pretty mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              <p className="mt-4 border-t border-line pt-3 font-mono text-[11px] text-faint">{c.proof}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
