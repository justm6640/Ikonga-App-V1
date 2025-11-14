
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Card from './Card';
import { WellnessPlan, Habit } from '../types';

interface WellnessCardProps {
  wellness: WellnessPlan;
}

const WellnessCard: React.FC<WellnessCardProps> = ({ wellness }) => {
  const [habits, setHabits] = useState<Habit[]>(wellness.habits);

  const toggleHabit = (index: number) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };
    
  return (
    <Card title="IKOWellness" icon={Sparkles}>
      <p className="mb-4 text-sm">Cochez vos habitudes bien-être du jour :</p>
      <div className="grid grid-cols-2 gap-3">
        {habits.map((habit, index) => (
          <button
            key={index}
            onClick={() => toggleHabit(index)}
            className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
              habit.completed
                ? 'bg-ikonga-green border-ikonga-green text-white'
                : 'bg-white border-gray-200 hover:border-ikonga-green'
            }`}
          >
            <span className="font-semibold text-sm">{habit.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-5 bg-ikonga-pink/20 p-3 rounded-lg text-center">
        <p className="text-sm font-medium">Méditation du jour :</p>
        <p className="text-sm font-semibold text-ikonga-dark">{wellness.meditation}</p>
      </div>
    </Card>
  );
};

export default WellnessCard;
