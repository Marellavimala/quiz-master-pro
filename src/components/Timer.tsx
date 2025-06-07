import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLimit: number;
  onTimeUp: () => void;
  isActive: boolean;
  onTick?: (timeRemaining: number) => void;
}

const Timer: React.FC<TimerProps> = ({ timeLimit, onTimeUp, isActive, onTick }) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);

  useEffect(() => {
    setTimeRemaining(timeLimit);
  }, [timeLimit]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        const newTime = prev - 1;
        if (onTick) onTick(newTime);
        
        if (newTime <= 0) {
          onTimeUp();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, onTimeUp, onTick]);

  const percentage = (timeRemaining / timeLimit) * 100;
  const strokeDasharray = 2 * Math.PI * 45;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  const getColorClass = () => {
    if (percentage > 50) return 'text-green-500';
    if (percentage > 25) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={getColorClass()}
            style={{
              strokeDasharray,
              strokeDashoffset,
              transition: 'stroke-dashoffset 1s linear'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Clock className={`w-6 h-6 mx-auto mb-1 ${getColorClass()}`} />
            <span className={`text-lg font-bold ${getColorClass()}`}>
              {timeRemaining}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;