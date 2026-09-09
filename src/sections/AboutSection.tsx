import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Award } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Background & Profile
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            {personalInfo.aboutText.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 dark:text-white block">Backend Specialization</span>
                  <span className="text-slate-600 dark:text-slate-400">Java, Spring Boot, JPA & Microservices</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 dark:text-white block">Language Certifications</span>
                  <span className="text-slate-600 dark:text-slate-400">JLPT N5 (Certified) • JLPT N4 (Pursuing)</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Summary Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={{ y: -2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Quick Facts
              </h3>

              <dl className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <dt className="text-slate-500 dark:text-slate-400">Name</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">{personalInfo.name}</dd>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <dt className="text-slate-500 dark:text-slate-400">Current Role</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">{personalInfo.role}</dd>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <dt className="text-slate-500 dark:text-slate-400">Current Company</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">Alchemy Techsol Pvt. Ltd.</dd>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <dt className="text-slate-500 dark:text-slate-400">Previous Company</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">Unikaihatsu Software Pvt. Ltd.</dd>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <dt className="text-slate-500 dark:text-slate-400">Experience</dt>
                  <dd className="font-semibold text-blue-600 dark:text-blue-400">3 Years (2023 – Present)</dd>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <dt className="text-slate-500 dark:text-slate-400">Certifications</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">JLPT N5 (Certified) • N4 (Pursuing)</dd>
                </div>

                <div className="flex justify-between py-1">
                  <dt className="text-slate-500 dark:text-slate-400">Client Projects</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white text-right">Experience working on Japanese client projects</dd>
                </div>
              </dl>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

