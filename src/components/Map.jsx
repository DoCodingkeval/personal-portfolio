import React from 'react';

const Map = ({ className = '' }) => {
  return (
    <div
      className={`w-8 border-l-2 border-[var(--border-primary)] max-[1024px]:hidden lg:visible lg:h-screen ${className}`}
    >
      <div className="mx-auto h-1.5 w-6 bg-neutral-400"></div>
    </div>
  );
};

export default Map;
