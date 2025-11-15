import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 ${className}`}>
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-ikonga-primary mr-3" />
        <h2 className="font-serif text-xl font-semibold text-ikonga-text-dark">{title}</h2>
      </div>
      <div className="text-ikonga-text-medium">
        {children}
      </div>
    </div>
  );
};

export default Card;