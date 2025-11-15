import React, { useState, useEffect } from 'react';
import AccueilIkonga from './components/AccueilIkonga';
import MainApp from './components/MainApp';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Check for existing session on initial load
  useEffect(() => {
    const userProfile = localStorage.getItem('ikongaUserProfile');
    if (userProfile) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // In a real app, you'd perform authentication here.
    // For now, we'll just simulate it and set a value in localStorage.
    localStorage.setItem('ikongaUserProfile', JSON.stringify({ loggedIn: true }));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('ikongaUserProfile');
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <MainApp onLogout={handleLogout} />
      ) : (
        <AccueilIkonga onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
