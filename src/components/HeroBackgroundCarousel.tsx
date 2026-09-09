import React from 'react';

export const HeroBackgroundCarousel: React.FC = () => {
  return (
    <div
      id="hero-bg-accent"
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none"
    >
      {/* Soft translucent radial glow to highlight the hero text */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle tech grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
    </div>
  );
};

