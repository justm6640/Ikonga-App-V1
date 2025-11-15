import React, { useState } from 'react';
import { Apple, GlassWater } from 'lucide-react';
import Card from './Card';
import { NutritionPlan, Meal } from '../types';

interface NutritionCardProps {
  nutrition: NutritionPlan;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ nutrition }) => {
  const [meals, setMeals] = useState<Meal[]>(nutrition.meals);

  const toggleMealCompletion = (index: number) => {
    const newMeals = [...meals];
    newMeals[index].completed = !newMeals[index].completed;
    setMeals(newMeals);
  };
  
  const waterProgress = (nutrition.waterIntake.current / nutrition.waterIntake.goal) * 100;

  return (
    <Card title="IKONutrition" icon={Apple}>
      <div className="space-y-4">
        {meals.map((meal, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`meal-${index}`}
              checked={meal.completed}
              onChange={() => toggleMealCompletion(index)}
              className="h-5 w-5 rounded border-gray-300 text-ikonga-primary focus:ring-ikonga-primary"
            />
            <label htmlFor={`meal-${index}`} className={`ml-3 text-ikonga-text-medium ${meal.completed ? 'line-through text-ikonga-text-light' : ''}`}>
              <span className="font-semibold text-ikonga-text-dark">{meal.name}:</span> {meal.description}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-sm font-medium text-ikonga-text-dark">
                <GlassWater className="w-4 h-4 mr-2 text-ikonga-primary"/>
                Hydratation
            </div>
            <span className="text-sm font-semibold text-ikonga-text-dark">{nutrition.waterIntake.current}L / {nutrition.waterIntake.goal}L</span>
        </div>
        <div className="w-full bg-ikonga-primary-light rounded-full h-2">
          <div className="bg-ikonga-primary h-2 rounded-full" style={{ width: `${waterProgress}%` }}></div>
        </div>
      </div>
    </Card>
  );
};

export default NutritionCard;