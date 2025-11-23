import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-orchid-600 text-white hover:bg-orchid-700 focus:ring-2 focus:ring-orchid-500 focus:ring-offset-2',
    secondary: 'bg-orchid-500 text-white hover:bg-orchid-600 focus:ring-2 focus:ring-orchid-500 focus:ring-offset-2',
    outline: 'border-2 border-orchid-600 text-orchid-700 hover:bg-orchid-500/10 focus:ring-2 focus:ring-orchid-500 focus:ring-offset-2',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
}