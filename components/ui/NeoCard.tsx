import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  color?: 'white' | 'yellow' | 'pink' | 'green' | 'blue' | 'purple';
  className?: string;
  hoverEffect?: boolean;
}

export const NeoCard: React.FC<NeoCardProps> = ({ 
  children, 
  color = 'white', 
  className = '',
  hoverEffect = false
}) => {
  
  const colorClasses = {
    white: 'bg-neo-white',
    yellow: 'bg-neo-yellow',
    pink: 'bg-neo-pink',
    green: 'bg-neo-green',
    blue: 'bg-neo-blue',
    purple: 'bg-neo-purple'
  };

  const hoverClasses = hoverEffect 
    ? "hover:-translate-y-2 hover:shadow-neo-lg transition-transform duration-200" 
    : "";

  return (
    <div className={`border-4 border-black shadow-neo p-6 ${colorClasses[color]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};