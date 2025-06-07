import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { Question as QuestionType } from '../types/quiz';
import Timer from './Timer';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
  timeLimit: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  timeLimit
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeUp(false);
  }, [question.id]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null || timeUp) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    setTimeout(() => {
      onAnswer(answerIndex);
    }, 2000);
  };

  const handleTimeUp = () => {
    if (selectedAnswer === null) {
      setTimeUp(true);
      setTimeout(() => {
        onAnswer(-1); // -1 indicates no answer selected
      }, 1500);
    }
  };

  const getOptionStyle = (index: number) => {
    if (!showFeedback && !timeUp) {
      return selectedAnswer === index
        ? 'bg-blue-100 border-blue-500 text-blue-700'
        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md';
    }

    if (index === question.correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-700';
    }

    if (selectedAnswer === index && index !== question.correctAnswer) {
      return 'bg-red-100 border-red-500 text-red-700';
    }

    return 'bg-gray-50 border-gray-200 text-gray-500';
  };

  const getOptionIcon = (index: number) => {
    if (!showFeedback && !timeUp) return null;

    if (index === question.correctAnswer) {
      return <Check className="w-5 h-5 text-green-600" />;
    }

    if (selectedAnswer === index && index !== question.correctAnswer) {
      return <X className="w-5 h-5 text-red-600" />;
    }

    return null;
  };

  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16" />
          
          {/* Timer */}
          <div className="flex justify-center mb-8">
            <Timer
              timeLimit={timeLimit}
              onTimeUp={handleTimeUp}
              isActive={!showFeedback && !timeUp}
            />
          </div>

          {/* Question */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Time Up Message */}
          {timeUp && (
            <div className="text-center mb-6">
              <div className="bg-orange-100 border border-orange-500 text-orange-700 px-4 py-3 rounded-lg">
                ⏰ Time's up! The correct answer was: <strong>{question.options[question.correctAnswer]}</strong>
              </div>
            </div>
          )}

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null || timeUp}
                className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 ${getOptionStyle(index)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-lg font-medium">{option}</span>
                  </div>
                  {getOptionIcon(index)}
                </div>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className="text-center">
              <div className={`p-4 rounded-lg ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-100 border border-green-500 text-green-700'
                  : 'bg-red-100 border border-red-500 text-red-700'
              }`}>
                <p className="font-semibold mb-2">
                  {selectedAnswer === question.correctAnswer ? '🎉 Correct!' : '❌ Incorrect!'}
                </p>
                {question.explanation && (
                  <p className="text-sm">{question.explanation}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;