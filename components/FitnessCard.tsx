import React from 'react';
import { HeartPulse, PlayCircle } from 'lucide-react';
import Card from './Card';
import { FitnessPlan } from '../types';

interface FitnessCardProps {
  fitness: FitnessPlan;
}

const FitnessCard: React.FC<FitnessCardProps> = ({ fitness }) => {
  return (
    <Card title="IKOFitness" icon={HeartPulse}>
      <p className="mb-4">Votre séance du jour :</p>
      <div className="bg-ikonga-primary-light p-4 rounded-2xl">
        <h3 className="font-bold text-ikonga-primary">{fitness.session}</h3>
        <p className="text-sm text-ikonga-text-medium">{fitness.duration} minutes</p>
      </div>
      <a
        href={fitness.videoUrl}
        className="mt-4 inline-flex items-center justify-center w-full bg-ikonga-primary text-white font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity"
      >
        <PlayCircle className="w-5 h-5 mr-2" />
        Lancer la vidéo
      </a>
    </Card>
  );
};

export default FitnessCard;