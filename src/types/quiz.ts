export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  timeRemaining: number;
  isComplete: boolean;
  selectedCategory: string | null;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: {
    question: Question;
    userAnswer: number;
    isCorrect: boolean;
  }[];
}