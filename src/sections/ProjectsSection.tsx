import React from 'react';
import { motion } from 'motion/react';
import { Building2, Lock, ArrowRight, Layers, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject?: (slug: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const hasProjects = projects && projects.length > 0;

  const handleProjectClick = (slug: string) => {
    if (onSelectProject) {
      onSelectProject(slug);
    } else {
      window.location.hash = `projects/${slug}`;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
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
              Portfolio & Engineering Work
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Production systems, enterprise architectures, and technical contributions.
          </p>
        </motion.div>

        {hasProjects && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project: ProjectItem, idx: number) => {
              const isCompany = project.isCompanyProject;

              return (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700/60 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle highlight accent top border */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 opacity-80" />

                  <div>
                    {/* Project Type Badge and Numbering */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          {project.typeLabel}
                        </span>
                        {isCompany && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/60">
                            <Lock className="w-3 h-3" />
                            Confidential Production
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 font-mono text-lg">{String(idx + 1).padStart(2, '0')} —</span>
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech String summary */}
                    {project.techLine && (
                      <div className="mb-6 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-slate-900 dark:text-white block sm:inline mr-2">Stack:</span>
                        <span>{project.techLine}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Technology Badges */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button: View My Contribution -> */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        id={`view-contribution-btn-${project.id}`}
                        onClick={() => handleProjectClick(project.slug)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-2xs group/btn cursor-pointer w-full sm:w-auto justify-center"
                      >
                        <span>View My Contribution</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {isCompany && (
                        <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          Production Case Study
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Next Project Placeholder Card */}
        <motion.div
          id="next-project-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="mt-8 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700/60 transition-all flex flex-col justify-center relative overflow-hidden group"
        >
          {/* Subtle accent border */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-slate-300 via-blue-500/40 to-slate-300 dark:from-slate-700 dark:via-blue-500/30 dark:to-slate-700 opacity-60 group-hover:opacity-100 transition-opacity" />

          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
              Next Project
            </h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Update Soon
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


