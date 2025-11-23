import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'green' | 'blue' | 'gray' | 'teal';
  className?: string;
}

export default function Badge({ children, variant = 'green', className = '' }: BadgeProps) {
  const variants = {
    green: 'bg-orchid-500/10 text-orchid-600',
    blue: 'bg-orchid-600/10 text-orchid-700',
    gray: 'bg-orchid-700/10 text-orchid-800',
    teal: 'bg-orchid-800/20 text-orchid-900',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}