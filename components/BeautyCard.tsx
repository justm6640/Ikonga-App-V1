import React from 'react';
import { SprayCan } from 'lucide-react';
import Card from './Card';
import { BeautyPlan } from '../types';

interface BeautyCardProps {
  beauty: BeautyPlan;
}

const BeautyCard: React.FC<BeautyCardProps> = ({ beauty }) => {
  return (
    <Card title="IKOBeauty" icon={SprayCan}>
      <p className="text-center italic text-md p-4 bg-ikonga-accent/50 rounded-2xl text-ikonga-text-dark">
        "{beauty.tip}"
      </p>
    </Card>
  );
};

export default BeautyCard;