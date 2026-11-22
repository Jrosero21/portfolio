import Reveal from './Reveal';

export default function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl sm:mb-16">
      <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</div>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      {intro && <p className="text-pretty mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
