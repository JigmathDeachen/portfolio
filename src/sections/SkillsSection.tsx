import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Cpu, Shield, Database, CheckCircle, Wrench } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    microservices: <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    security: <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    database: <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    testing: <CheckCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
    tools: <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Technical Stack
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
              Demonstrated core competencies across backend development, microservices, cloud patterns, database persistence, and quality assurance.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-end">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory('all')}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Skills
            </motion.button>
            {skillCategories.map((c) => (
              <motion.button
                key={c.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(c.id)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {c.category.split(' ')[0]}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((cat, idx) => (
              <motion.div
                layout
                key={cat.id}
                id={`skills-card-${cat.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60">
                      {categoryIcons[cat.id]}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Tags/Chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.1 }}
                        className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-md bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom skill count indicator */}
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{cat.skills.length} core proficiencies</span>
                  <span className="font-mono text-slate-400">Production-ready</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

