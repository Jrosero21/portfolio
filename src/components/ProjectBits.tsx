import Image from 'next/image';
import { ArrowUpRight, Github, Lock, PlayCircle } from 'lucide-react';
import type { Project } from '@/data/projects';
import ProjectVisual from './ProjectVisual';

const liveStatuses = new Set(['In production', 'Production pilot', 'Live']);

export function StatusBadge({ status }: { status: Project['status'] }) {
  const live = liveStatuses.has(status);
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${live ? 'pulse-dot bg-ok' : 'bg-faint'}`} />
      {status}
    </span>
  );
}

export function Tags({ items, max }: { items: string[]; max?: number }) {
  const shown = max ? items.slice(0, max) : items;
  const rest = max ? items.length - shown.length : 0;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {shown.map((t) => (
        <li key={t} className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
          {t}
        </li>
      ))}
      {rest > 0 && <li className="px-1 py-0.5 font-mono text-[11px] text-faint">+{rest}</li>}
    </ul>
  );
}

export function ProjectMedia({ project, priority }: { project: Project; priority?: boolean }) {
  if (project.image) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl border border-line bg-surface-2">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          priority={priority}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  if (project.visual) return <ProjectVisual kind={project.visual} />;
  return null;
}

export function ProjectLinks({ project, size = 'sm' }: { project: Project; size?: 'sm' | 'md' }) {
  const cls =
    size === 'md'
      ? 'inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-line-strong'
      : 'relative z-10 inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-fg';
  const { links } = project;
  return (
    <div className={`flex flex-wrap items-center ${size === 'md' ? 'gap-2' : 'gap-4'}`}>
      {links?.live && (
        <a href={links.live} target="_blank" rel="noopener noreferrer" className={cls}>
          Live site <ArrowUpRight size={14} />
        </a>
      )}
      {links?.video && (
        <a href={links.video} target="_blank" rel="noopener noreferrer" className={cls}>
          <PlayCircle size={14} /> Demo video
        </a>
      )}
      {links?.repo && (
        <a href={links.repo} target="_blank" rel="noopener noreferrer" className={cls}>
          <Github size={14} /> Code
        </a>
      )}
      {project.privateRepo && !links?.repo && (
        <span className={`${size === 'md' ? 'inline-flex items-center gap-1.5 px-1 text-sm' : 'inline-flex items-center gap-1 text-xs'} text-faint`}>
          <Lock size={12} /> {size === 'md' ? 'Private repo · walkthrough on request' : 'Private repo'}
        </span>
      )}
    </div>
  );
}
