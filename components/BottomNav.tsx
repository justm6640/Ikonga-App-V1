import React from 'react';
import { Home, Apple, HeartPulse, Sparkles, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { name: 'Accueil', icon: Home },
  { name: 'Nutrition', icon: Apple },
  { name: 'Fitness', icon: HeartPulse },
  { name: 'Bien-être', icon: Sparkles },
  { name: 'Profil', icon: User },
];

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-lg z-10 border-t border-gray-200/50">
      <div className="flex justify-around max-w-lg mx-auto">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`flex flex-col items-center justify-center w-full py-3 px-1 text-xs transition-colors duration-200 font-medium ${
              activeTab === item.name
                ? 'text-ikonga-primary'
                : 'text-ikonga-text-light hover:text-ikonga-primary'
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;