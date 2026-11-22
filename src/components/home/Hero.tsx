'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { heroStats, profile } from '@/data/site';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur"
        >
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ok" />
          {profile.currently}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="text-balance max-w-4xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]"
        >
          I build the data and AI systems a business{' '}
          <span className="whitespace-nowrap text-accent">runs on.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="text-pretty mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          I’m Jonny Rosero, a data and BI leader who also writes the software. For twelve years I’ve turned messy operations into
          reporting platforms, redesigned processes and, more and more, AI agents with guardrails that do the work themselves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium transition-colors hover:bg-surface"
          >
            Get in touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-20 md:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-xs text-faint sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
