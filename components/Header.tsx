
import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm p-4 z-10 flex justify-between items-center">
      <div>
        <h1 className="font-serif text-2xl text-ikonga-orange font-bold">IKONGA</h1>
        <p className="text-sm text-gray-500">Lifestyle</p>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-right text-sm hidden sm:inline">
          Bonjour, <span className="font-semibold">{user.name.split(' ')[0]}</span>
        </span>
        <img
          src={user.avatarUrl}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-ikonga-pink"
        />
      </div>
    </header>
  );
};

export default Header;
