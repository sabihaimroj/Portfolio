import React from 'react';

interface GabrielWordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const GabrielWordmark: React.FC<GabrielWordmarkProps> = ({ className = '', size = 'lg' }) => {
  const fontSizeClass = size === 'sm' ? 'text-4xl' : size === 'md' ? 'text-6xl' : 'text-8xl';

  return (
    <div className={`flex justify-center items-center select-none ${className}`}>
      <h1 className={`font-syne font-extrabold uppercase tracking-tighter ${fontSizeClass}`}>
        Sabiha
      </h1>
    </div>
  );
};
