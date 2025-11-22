import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        hover ? 'transition-transform hover:scale-105 hover:shadow-xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
