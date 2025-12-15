import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  fullWidth?: boolean;
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  // Updated styles for better hover/active states
  const baseStyles = "relative font-bold border-4 border-black px-6 py-3 text-lg transition-all shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none";
  
  const variants = {
    primary: "bg-neo-yellow hover:bg-yellow-300 text-black",
    secondary: "bg-neo-white hover:bg-gray-100 text-black",
    accent: "bg-neo-pink hover:bg-pink-400 text-white",
    outline: "bg-transparent hover:bg-neo-black hover:text-white text-black bg-white"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};