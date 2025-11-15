import React from 'react';
import { User } from '../types';

interface ProgressCardProps {
    user: User;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ user }) => {
    return (
        <div className="bg-ikonga-primary text-white rounded-3xl shadow-lg shadow-ikonga-primary/20 p-6">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="font-serif text-2xl">Bonjour, {user.name.split(' ')[0]} !</h2>
                    <p className="opacity-80">Phase Actuelle : <span className="font-bold">{user.phase}</span></p>
                </div>
                <div className="bg-white/20 text-white text-xs font-bold py-1 px-3 rounded-full">
                    JOUR 4
                </div>
            </div>
            <div className="mt-6">
                <p className="text-sm font-medium opacity-90 mb-2">Progression</p>
                <div className="w-full bg-white/30 rounded-full h-2.5">
                    <div className="bg-white h-2.5 rounded-full" style={{ width: `${user.progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;