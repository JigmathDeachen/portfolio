import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { HeroSection } from './sections/HeroSection';
import { HighlightsSection } from './sections/HighlightsSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EngineeringApproachSection } from './sections/EngineeringApproachSection';
import { ContactSection } from './sections/ContactSection';
import { projects } from './data/projects';

export default function App() {
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  // Sync URL hash / pathname with project detail state
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      let matchedSlug: string | null = null;
      if (path.startsWith('/projects/')) {
        matchedSlug = path.replace('/projects/', '').replace(/\/$/, '');
      } else if (hash.startsWith('#projects/')) {
        matchedSlug = hash.replace('#projects/', '').replace(/\/$/, '');
      } else if (hash.startsWith('#/projects/')) {
        matchedSlug = hash.replace('#/projects/', '').replace(/\/$/, '');
      }

      if (matchedSlug) {
        const found = projects.find((p) => p.slug === matchedSlug || p.id === matchedSlug);
        if (found) {
          setSelectedProjectSlug(found.slug);
          return;
        }
      }
      setSelectedProjectSlug(null);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleSelectProject = (slug: string) => {
    setSelectedProjectSlug(slug);
    window.history.pushState({ project: slug }, '', `/projects/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = (targetSectionId: string = 'projects') => {
    setSelectedProjectSlug(null);
    window.history.pushState({}, '', `/#${targetSectionId}`);
    setTimeout(() => {
      const el = document.getElementById(targetSectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  const currentProject = selectedProjectSlug
    ? projects.find((p) => p.slug === selectedProjectSlug || p.id === selectedProjectSlug)
    : null;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        {/* Sticky Header Navigation */}
        <Navbar
          isProjectDetailsOpen={!!currentProject}
          onBackToPortfolio={handleBackToPortfolio}
        />

        {/* Main Content Areas */}
        <main className="flex-1">
          {currentProject ? (
            /* Dedicated Project Detail Presentation View */
            <ProjectDetailPage
              project={currentProject}
              onBack={() => handleBackToPortfolio('projects')}
            />
          ) : (
            /* Main Portfolio Overview */
            <>
              {/* 1. Hero Section */}
              <HeroSection />

              {/* 2. Quick Profile Highlights (4 Cards) */}
              <HighlightsSection />

              {/* 3. About Me */}
              <AboutSection />

              {/* 4. Experience (Vertical Timeline) */}
              <ExperienceSection />

              {/* 5. Technical Skills (Categorized Chips) */}
              <SkillsSection />

              {/* 6. Featured Projects */}
              <ProjectsSection onSelectProject={handleSelectProject} />

              {/* 7. Engineering Approach (5-Step Lifecycle) */}
              <EngineeringApproachSection />

              {/* 8. Contact Form & Channels */}
              <ContactSection />
            </>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}




