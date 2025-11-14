
export enum ProgramPhase {
  Detox = 'Détox',
  Equilibre = 'Équilibre',
  Consolidation = 'Consolidation',
  Entretien = 'Entretien',
}

export interface User {
  name: string;
  avatarUrl: string;
  phase: ProgramPhase;
  progress: number; // Percentage
  height: number; // in cm
  weight: number; // in kg
  goalWeight: number; // in kg
}

export interface Meal {
  name: string;
  description: string;
  completed: boolean;
}

export interface WaterIntake {
  current: number;
  goal: number;
}

export interface NutritionPlan {
  meals: Meal[];
  waterIntake: WaterIntake;
}

export interface FitnessPlan {
  session: string;
  duration: number; // in minutes
  videoUrl: string;
}

export interface Habit {
    name: string;
    completed: boolean;
}

export interface WellnessPlan {
  meditation: string;
  habits: Habit[];
}

export interface BeautyPlan {
  tip: string;
}

export interface DailyPlan {
  nutrition: NutritionPlan;
  fitness: FitnessPlan;
  wellness: WellnessPlan;
  beauty: BeautyPlan;
}

export interface Message {
  sender: 'user' | 'ai';
  text: string;
}