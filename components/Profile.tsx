
import React from 'react';
import { User } from '../types';
import { ChevronRight, ShieldCheck, Bell, CreditCard, Mail, HelpCircle, FileText, LogOut, LucideIcon } from 'lucide-react';

interface ProfileProps {
  user: User;
}

interface ProfileListItemProps {
    icon: LucideIcon;
    text: string;
    onClick?: () => void;
}

const ProfileListItem: React.FC<ProfileListItemProps> = ({ icon: Icon, text, onClick = () => {} }) => (
    <button onClick={onClick} className="flex items-center w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <Icon className="w-5 h-5 text-ikonga-orange mr-4 flex-shrink-0" />
        <span className="flex-grow text-ikonga-dark font-medium">{text}</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
);


const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="p-4 space-y-6 max-w-2xl mx-auto">
      {/* Profile Header */}
      <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md">
        <img 
          src={user.avatarUrl} 
          alt="User Avatar" 
          className="w-24 h-24 rounded-full border-4 border-ikonga-pink object-cover" 
        />
        <h2 className="mt-4 text-2xl font-serif font-bold text-ikonga-dark">{user.name}</h2>
        <p className="text-sm text-gray-500">Phase Actuelle : <span className="font-semibold text-ikonga-green">{user.phase}</span></p>
      </div>

      {/* Health Info */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-serif text-xl mb-4 text-ikonga-dark">Mes Informations</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
            <div>
                <p className="text-sm text-gray-500">Taille</p>
                <p className="font-bold text-lg text-ikonga-dark">{user.height} cm</p>
            </div>
            <div>
                <p className="text-sm text-gray-500">Poids Actuel</p>
                <p className="font-bold text-lg text-ikonga-dark">{user.weight} kg</p>
            </div>
            <div>
                <p className="text-sm text-gray-500">Objectif</p>
                <p className="font-bold text-lg text-ikonga-green">{user.goalWeight} kg</p>
            </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-serif text-xl mb-4 text-ikonga-dark">Paramètres du compte</h3>
        <div className="space-y-3">
            <ProfileListItem icon={ShieldCheck} text="Changer mon mot de passe" />
            <ProfileListItem icon={Bell} text="Notifications" />
            <ProfileListItem icon={CreditCard} text="Gérer mon abonnement" />
        </div>
      </div>
      
      {/* Support & Info */}
       <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-serif text-xl mb-4 text-ikonga-dark">Support & Informations</h3>
        <div className="space-y-3">
            <ProfileListItem icon={Mail} text="Contacter IKONGA Lifestyle" />
            <ProfileListItem icon={HelpCircle} text="Foire Aux Questions" />
            <ProfileListItem icon={FileText} text="Conditions d'utilisation" />
        </div>
      </div>

      {/* Logout Button */}
      <div className="pt-2">
         <button className="w-full flex items-center justify-center bg-gray-200 text-gray-600 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200">
             <LogOut className="w-5 h-5 mr-2" />
             Se déconnecter
         </button>
      </div>
    </div>
  );
};

export default Profile;
