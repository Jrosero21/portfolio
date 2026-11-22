'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { categoryLabels, type Category, type Project } from '@/data/projects';
import FeatureCard from './FeatureCard';

type Filter = 'all' | Category;

export default function MoreWork({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('all');
  const shown = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter, projects],
  );
  const filters: Filter[] = ['all', 'ai', 'fullstack', 'data'];

  return (
    <div className="mt-24">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">More projects</h3>
          <p className="mt-2 text-muted">AI tooling, data engineering and full-stack builds.</p>
        </div>
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1.5 rounded-full border border-line bg-surface p-1">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                filter === f ? 'bg-fg text-bg' : 'text-muted hover:text-fg'
              }`}
            >
              {f === 'all' ? 'All' : categoryLabels[f]}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="min-w-0"
            >
              <FeatureCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
