
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import { User, DailyPlan, ProgramPhase } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Accueil');

  const mockUser: User = useMemo(() => ({
    name: 'Jane Doe',
    avatarUrl: 'https://picsum.photos/100',
    phase: ProgramPhase.Detox,
    progress: 25,
    height: 165,
    weight: 68,
    goalWeight: 60,
  }), []);

  const mockDailyPlan: DailyPlan = useMemo(() => ({
    nutrition: {
      meals: [
        { name: 'Petit-déjeuner', description: 'Smoothie vert détoxifiant', completed: true },
        { name: 'Déjeuner', description: 'Salade de quinoa et légumes grillés', completed: false },
        { name: 'Dîner', description: 'Soupe de lentilles corail', completed: false },
      ],
      waterIntake: { current: 1.2, goal: 2.5 },
    },
    fitness: {
      session: 'Circuit training - Full Body',
      duration: 30,
      videoUrl: '#',
    },
    wellness: {
      meditation: 'Méditation de pleine conscience - 10 min',
      habits: [
        { name: 'Hydratation', completed: true },
        { name: 'Mouvement', completed: false },
        { name: 'Pleine conscience', completed: false },
        { name: 'Sommeil', completed: false },
      ],
    },
    beauty: {
      tip: 'N\'oubliez pas d\'appliquer un masque hydratant ce soir pour nourrir votre peau en profondeur.'
    }
  }), []);
  
  const renderContent = () => {
    switch (activeTab) {
      case 'Accueil':
        return <Dashboard user={mockUser} plan={mockDailyPlan} />;
      case 'Profil':
        return <Profile user={mockUser} />;
      default:
        return (
          <div className="p-4 text-center max-w-4xl mx-auto mt-10">
            <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-serif text-ikonga-orange">Page "{activeTab}"</h2>
                <p className="mt-2 text-gray-600">Le contenu pour cette section sera bientôt disponible.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen text-ikonga-dark">
      <Header user={mockUser} />
      <main className="pb-24 pt-16">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;