import React from 'react';
import { motion } from 'motion/react';
import { FileText, Compass, Code, CheckCircle2, TrendingUp } from 'lucide-react';
import { engineeringSteps } from '../data/engineering';

export const EngineeringApproachSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    FileText: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    Compass: <Compass className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    Code: <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
  };

  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Methodology & Workflow
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Approach
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            A disciplined, quality-first development lifecycle emphasizing clear requirements, architectural precision, and thorough testing.
          </p>
        </motion.div>

        {/* 5 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {engineeringSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              id={`engineering-step-${step.step}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl sm:text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.step}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                    {iconMap[step.iconName]}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2.5">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Key Practices */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                {step.keyPractices.map((practice, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                    <span>{practice}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

