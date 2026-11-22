import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { profile } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="text-sm text-muted">
          <span className="text-fg">{profile.name}</span> · {profile.role}
          <div className="mt-1 font-mono text-xs text-faint">© {new Date().getFullYear()} · Built with Next.js, Tailwind & Framer Motion</div>
        </div>
        <div className="flex items-center gap-2">
          {[
            { href: profile.github, label: 'GitHub', icon: <FaGithub size={17} /> },
            { href: profile.linkedin, label: 'LinkedIn', icon: <FaLinkedin size={17} /> },
            { href: `mailto:${profile.email}`, label: 'Email', icon: <Mail size={17} /> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
