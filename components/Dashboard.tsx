
import React from 'react';
import { DailyPlan, User } from '../types';
import NutritionCard from './NutritionCard';
import FitnessCard from './FitnessCard';
import WellnessCard from './WellnessCard';
import BeautyCard from './BeautyCard';
import CoachAICard from './CoachAICard';
import ProgressCard from './ProgressCard';

interface DashboardProps {
  user: User;
  plan: DailyPlan;
}

const Dashboard: React.FC<DashboardProps> = ({ user, plan }) => {
  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto">
      <ProgressCard user={user} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CoachAICard />
        <NutritionCard nutrition={plan.nutrition} />
        <FitnessCard fitness={plan.fitness} />
        <WellnessCard wellness={plan.wellness} />
        <BeautyCard beauty={plan.beauty} />
      </div>
    </div>
  );
};

export default Dashboard;
