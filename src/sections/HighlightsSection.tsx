import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Code2, Server, Languages } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const HighlightsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    exp: <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    java: <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    spring: <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    jlpt: <Languages className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
  };

  return (
    <section className="py-8 bg-slate-100/60 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.highlights.map((item, index) => (
            <motion.div
              key={item.id}
              id={`highlight-card-${item.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </span>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                  {iconMap[item.id]}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

