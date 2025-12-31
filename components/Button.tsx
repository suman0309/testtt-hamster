import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'success';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold text-lg transition-all transform duration-200 shadow-lg active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/50",
    danger: "bg-ny-red hover:bg-red-600 text-white shadow-red-500/50",
    success: "bg-ny-green hover:bg-green-600 text-white shadow-green-500/50",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};