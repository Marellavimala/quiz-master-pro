import React, { useState, useEffect } from 'react';
import { Question as QuestionType, QuizResult } from '../types/quiz';
import { questions, categories } from '../data/questions';
import Question from './Question';
import Results from './Results';

interface QuizProps {
  category: string;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ category, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuestionType[]>([]);

  const TIME_LIMIT = 30; // 30 seconds per question

  useEffect(() => {
    // Shuffle questions for variety
    const categoryQuestions = [...questions[category]];
    const shuffled = categoryQuestions.sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled);
    resetQuiz();
  }, [category]);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setIsComplete(false);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const getResults = (): QuizResult => {
    const totalQuestions = quizQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const detailedAnswers = quizQuestions.map((question, index) => ({
      question,
      userAnswer: answers[index] ?? -1,
      isCorrect: answers[index] === question.correctAnswer
    }));

    return {
      score,
      totalQuestions,
      percentage,
      answers: detailedAnswers
    };
  };

  const handleRestart = () => {
    const categoryQuestions = [...questions[category]];
    const shuffled = categoryQuestions.sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled);
    resetQuiz();
  };

  const categoryName = categories.find(cat => cat.id === category)?.name || 'Unknown';

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <Results
        result={getResults()}
        onRestart={handleRestart}
        onNewCategory={onBack}
        categoryName={categoryName}
      />
    );
  }

  return (
    <Question
      question={quizQuestions[currentQuestionIndex]}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={quizQuestions.length}
      onAnswer={handleAnswer}
      timeLimit={TIME_LIMIT}
    />
  );
};

export default Quiz;