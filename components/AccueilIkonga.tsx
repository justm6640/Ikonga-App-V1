import React, { useState, useEffect } from 'react';

interface AccueilIkongaProps {
  onLogin: () => void;
}

const AccueilIkonga: React.FC<AccueilIkongaProps> = ({ onLogin }) => {
  const [hasProfile, setHasProfile] = useState<boolean>(false);

  useEffect(() => {
    const userProfile = localStorage.getItem('ikongaUserProfile');
    if (userProfile) {
      setHasProfile(true);
    }
  }, []);

  const handleGoToBilan = () => {
    console.log("Aller vers page Bilan IKONGA");
    onLogin();
  };

  const handleGoToEspaceAbonne = () => {
    console.log("Aller vers espace abonné");
    onLogin();
  };

  const handleResume = () => {
    console.log("Reprendre la session IKONGA existante");
    onLogin();
  };

  return (
    <div className="min-h-screen bg-ikonga-bg flex flex-col font-sans text-ikonga-text-dark">
      <div className="w-full max-w-md mx-auto p-6 flex flex-col justify-center items-center text-center flex-grow">
        <header className="mb-12">
           <div className="inline-block bg-ikonga-accent/60 text-ikonga-primary font-bold tracking-widest text-sm py-2 px-4 rounded-full mb-5">
            IKONGA
          </div>
          <h1 className="font-serif text-4xl font-bold text-ikonga-text-dark m-0">
            IKONGA Lifestyle
          </h1>
          <p className="text-base text-ikonga-text-medium mt-2">
            Nutrition - Fitness - Wellness - Beauty
          </p>
        </header>

        <main className="w-full">
          <div className="mb-10">
            <h2 className="font-serif text-3xl text-ikonga-primary mb-3">
              Bienvenue dans ton espace
            </h2>
            <p className="max-w-xs mx-auto text-ikonga-text-medium text-base leading-relaxed">
              Ton espace personnalisé pour transformer ton corps, ton énergie et ton lifestyle.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 w-full flex flex-col gap-4">
             {hasProfile && (
                <button 
                  onClick={handleResume} 
                  className="w-full h-14 rounded-2xl text-base font-semibold cursor-pointer transition-colors duration-200 text-ikonga-primary hover:bg-ikonga-primary-light"
                >
                    Reprendre là où j’ai arrêté
                </button>
            )}
            <button 
              onClick={handleGoToBilan} 
              className="w-full h-14 rounded-2xl text-base font-bold cursor-pointer transition-transform duration-200 ease-in-out flex items-center justify-center bg-ikonga-primary text-white shadow-md shadow-ikonga-primary/20 hover:scale-[1.02]"
            >
              Faire mon bilan IKONGA
            </button>
            <button 
              onClick={handleGoToEspaceAbonne} 
              className="w-full h-14 rounded-2xl text-base font-bold cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-center bg-ikonga-primary-light text-ikonga-primary hover:bg-ikonga-primary/20"
            >
              Je suis déjà abonné(e)
            </button>
          </div>
        </main>
      </div>
      <footer className="w-full text-center py-6 text-ikonga-text-light text-sm">
        <p>Méthode IKONGA - Depuis 2014</p>
      </footer>
    </div>
  );
};

export default AccueilIkonga;