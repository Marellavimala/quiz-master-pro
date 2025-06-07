import React from 'react';
import { Brain, Beaker, Clock, Trophy } from 'lucide-react';
import { QuizCategory } from '../types/quiz';
import { categories } from '../data/questions';

interface CategorySelectionProps {
  onSelectCategory: (categoryId: string) => void;
}

const iconMap = {
  Brain,
  Beaker,
  Clock,
  Trophy
};

const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelectCategory }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            QuizMaster Pro
          </h1>
          <p className="text-xl text-purple-200 animate-fade-in-delay">
            Choose your category and test your knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <div
                key={category.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => onSelectCategory(category.id)}
              >
                <div className={`bg-gradient-to-r ${category.color} p-1 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-3">
                      {category.name}
                    </h3>
                    <p className="text-purple-100 text-center leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-6 text-center">
                      <div className="inline-flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-medium">Start Quiz</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;