import React, { useState } from 'react';
import Header from './Header';
import BottomNav from './BottomNav';
import Dashboard from './Dashboard';
import Profile from './Profile';
import { User, DailyPlan, ProgramPhase } from '../types';

// Mock Data
const mockUser: User = {
  name: 'Jane Doe',
  avatarUrl: 'https://i.pravatar.cc/150?u=janedoe',
  phase: ProgramPhase.Equilibre,
  progress: 65,
  height: 168,
  weight: 65,
  goalWeight: 62,
};

const mockPlan: DailyPlan = {
  nutrition: {
    meals: [
      { name: 'Petit-déjeuner', description: 'Smoothie vert & amandes', completed: true },
      { name: 'Déjeuner', description: 'Salade de quinoa, poulet grillé', completed: false },
      { name: 'Dîner', description: 'Soupe de lentilles corail', completed: false },
    ],
    waterIntake: { current: 1.2, goal: 2.0 },
  },
  fitness: {
    session: 'Full Body HIIT',
    duration: 30,
    videoUrl: '#',
  },
  wellness: {
    meditation: 'Pleine conscience (10 min)',
    habits: [
        { name: 'Méditation', completed: true },
        { name: 'Lecture', completed: false },
        { name: 'Marche', completed: true },
        { name: 'Gratitude', completed: false },
    ],
  },
  beauty: {
    tip: 'Pensez à bien hydrater votre peau après la douche.',
  },
};

interface MainAppProps {
  onLogout: () => void;
}

const MainApp: React.FC<MainAppProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Accueil');

  const renderContent = () => {
    switch (activeTab) {
      case 'Accueil':
        return <Dashboard user={mockUser} plan={mockPlan} />;
      case 'Profil':
        return <Profile user={mockUser} onLogout={onLogout} />;
      // Add cases for other tabs later
      default:
        return (
          <div className="p-4 pt-24 text-center">
            <h2 className="text-2xl font-serif text-ikonga-text-dark">Contenu à venir</h2>
            <p className="text-ikonga-text-medium">La section "{activeTab}" est en cours de construction.</p>
          </div>
        );
    }
  };

  return (
    <div className="pb-24 bg-ikonga-bg min-h-screen">
      <Header user={mockUser} />
      <main className="pt-20">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MainApp;