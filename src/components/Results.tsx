import React from 'react';
import { Trophy, RotateCcw, Star, Target, TrendingUp } from 'lucide-react';
import { QuizResult } from '../types/quiz';

interface ResultsProps {
  result: QuizResult;
  onRestart: () => void;
  onNewCategory: () => void;
  categoryName: string;
}

const Results: React.FC<ResultsProps> = ({ result, onRestart, onNewCategory, categoryName }) => {
  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', message: 'Outstanding!', color: 'text-green-600' };
    if (percentage >= 80) return { grade: 'A', message: 'Excellent!', color: 'text-green-500' };
    if (percentage >= 70) return { grade: 'B', message: 'Good Job!', color: 'text-blue-500' };
    if (percentage >= 60) return { grade: 'C', message: 'Not Bad!', color: 'text-yellow-500' };
    if (percentage >= 50) return { grade: 'D', message: 'You Can Do Better!', color: 'text-orange-500' };
    return { grade: 'F', message: 'Keep Practicing!', color: 'text-red-500' };
  };

  const gradeInfo = getGrade(result.percentage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 shadow-2xl">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Quiz Complete!</h1>
          <p className="text-xl text-purple-200">{categoryName} Category</p>
        </div>

        {/* Score Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-white/80">Score</span>
              </div>
              <div className="text-4xl font-bold text-white">
                {result.score}/{result.totalQuestions}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-400 mr-2" />
                <span className="text-white/80">Percentage</span>
              </div>
              <div className="text-4xl font-bold text-white">
                {result.percentage}%
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-400 mr-2" />
                <span className="text-white/80">Grade</span>
              </div>
              <div className={`text-4xl font-bold ${gradeInfo.color.replace('text-', 'text-')}`}>
                {gradeInfo.grade}
              </div>
              <div className="text-white/80 text-sm">
                {gradeInfo.message}
              </div>
            </div>
          </div>
        </div>

        {/* Answer Review */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
              ?
            </span>
            Answer Review
          </h2>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {result.answers.map((answer, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  answer.isCorrect 
                    ? 'bg-green-50 border-green-500' 
                    : 'bg-red-50 border-red-500'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 mb-2">
                      {index + 1}. {answer.question.question}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Your answer: </span>
                        <span className={answer.isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                          {answer.userAnswer >= 0 ? answer.question.options[answer.userAnswer] : 'No answer'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Correct answer: </span>
                        <span className="text-green-600 font-medium">
                          {answer.question.options[answer.question.correctAnswer]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center ${
                    answer.isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {answer.isCorrect ? '✓' : '✗'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <button
            onClick={onNewCategory}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            <Star className="w-5 h-5 mr-2" />
            New Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;