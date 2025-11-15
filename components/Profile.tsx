import React from 'react';
import { User } from '../types';
import { ChevronRight, ShieldCheck, Bell, CreditCard, Mail, HelpCircle, FileText, LogOut, LucideIcon } from 'lucide-react';

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

interface ProfileListItemProps {
    icon: LucideIcon;
    text: string;
    onClick?: () => void;
}

const ProfileListItem: React.FC<ProfileListItemProps> = ({ icon: Icon, text, onClick = () => {} }) => (
    <button onClick={onClick} className="flex items-center w-full text-left p-4 bg-ikonga-bg/50 rounded-xl hover:bg-ikonga-primary-light/50 transition-colors duration-200">
        <Icon className="w-5 h-5 text-ikonga-primary mr-4 flex-shrink-0" />
        <span className="flex-grow text-ikonga-text-dark font-medium">{text}</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
);


const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-2xl mx-auto">
      {/* Profile Header */}
      <div className="flex flex-col items-center p-6 bg-white rounded-3xl border border-gray-200/80 shadow-sm">
        <img 
          src={user.avatarUrl} 
          alt="User Avatar" 
          className="w-24 h-24 rounded-full border-4 border-ikonga-primary-light object-cover" 
        />
        <h2 className="mt-4 text-2xl font-serif font-bold text-ikonga-text-dark">{user.name}</h2>
        <p className="text-sm text-ikonga-text-medium">Phase Actuelle : <span className="font-semibold text-ikonga-primary">{user.phase}</span></p>
      </div>

      {/* Health Info */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6">
        <h3 className="font-serif text-xl mb-4 text-ikonga-text-dark">Mes Informations</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
            <div>
                <p className="text-sm text-ikonga-text-light">Taille</p>
                <p className="font-bold text-lg text-ikonga-text-dark">{user.height} cm</p>
            </div>
            <div>
                <p className="text-sm text-ikonga-text-light">Poids Actuel</p>
                <p className="font-bold text-lg text-ikonga-text-dark">{user.weight} kg</p>
            </div>
            <div>
                <p className="text-sm text-ikonga-text-light">Objectif</p>
                <p className="font-bold text-lg text-ikonga-primary">{user.goalWeight} kg</p>
            </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6">
        <h3 className="font-serif text-xl mb-4 text-ikonga-text-dark">Paramètres du compte</h3>
        <div className="space-y-3">
            <ProfileListItem icon={ShieldCheck} text="Changer mon mot de passe" />
            <ProfileListItem icon={Bell} text="Notifications" />
            <ProfileListItem icon={CreditCard} text="Gérer mon abonnement" />
        </div>
      </div>
      
      {/* Support & Info */}
       <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6">
        <h3 className="font-serif text-xl mb-4 text-ikonga-text-dark">Support & Informations</h3>
        <div className="space-y-3">
            <ProfileListItem icon={Mail} text="Contacter IKONGA Lifestyle" />
            <ProfileListItem icon={HelpCircle} text="Foire Aux Questions" />
            <ProfileListItem icon={FileText} text="Conditions d'utilisation" />
        </div>
      </div>

      {/* Logout Button */}
      <div className="pt-2">
         <button 
             onClick={onLogout}
             className="w-full flex items-center justify-center bg-ikonga-primary-light text-ikonga-primary font-bold py-3 px-4 rounded-2xl hover:bg-ikonga-accent transition-colors duration-200">
             <LogOut className="w-5 h-5 mr-2" />
             Se déconnecter
         </button>
      </div>
    </div>
  );
};

export default Profile;