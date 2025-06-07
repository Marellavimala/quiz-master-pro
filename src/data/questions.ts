import { Question, QuizCategory } from '../types/quiz';

export const categories: QuizCategory[] = [
  {
    id: 'general',
    name: 'General Knowledge',
    description: 'Test your knowledge across various topics',
    icon: 'Brain',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'science',
    name: 'Science & Technology',
    description: 'Explore the world of science and innovation',
    icon: 'Beaker',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'history',
    name: 'History',
    description: 'Journey through time and historical events',
    icon: 'Clock',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Challenge your sports knowledge',
    icon: 'Trophy',
    color: 'from-yellow-500 to-orange-600'
  }
];

export const questions: Record<string, Question[]> = {
  general: [
    {
      id: 1,
      category: 'general',
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 2,
      explanation: 'Canberra is the capital city of Australia, chosen as a compromise between Sydney and Melbourne.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
      explanation: 'Mars is called the Red Planet due to iron oxide (rust) on its surface.'
    },
    {
      id: 3,
      category: 'general',
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      correctAnswer: 3,
      explanation: 'The Pacific Ocean is the largest ocean, covering about one-third of Earth\'s surface.'
    },
    {
      id: 4,
      category: 'general',
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
      correctAnswer: 2,
      explanation: 'Leonardo da Vinci painted the Mona Lisa between 1503 and 1519.'
    },
    {
      id: 5,
      category: 'general',
      question: 'What is the smallest country in the world?',
      options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
      correctAnswer: 1,
      explanation: 'Vatican City is the smallest country in the world with an area of just 0.17 square miles.'
    }
  ],
  science: [
    {
      id: 6,
      category: 'science',
      question: 'What is the chemical symbol for gold?',
      options: ['Go', 'Gd', 'Au', 'Ag'],
      correctAnswer: 2,
      explanation: 'Au comes from the Latin word "aurum" meaning gold.'
    },
    {
      id: 7,
      category: 'science',
      question: 'How many bones are in the adult human body?',
      options: ['196', '206', '216', '226'],
      correctAnswer: 1,
      explanation: 'The adult human body has 206 bones, while babies are born with about 270 bones.'
    },
    {
      id: 8,
      category: 'science',
      question: 'What is the speed of light in vacuum?',
      options: ['299,792,458 m/s', '300,000,000 m/s', '299,000,000 m/s', '301,000,000 m/s'],
      correctAnswer: 0,
      explanation: 'The speed of light in vacuum is exactly 299,792,458 meters per second.'
    },
    {
      id: 9,
      category: 'science',
      question: 'Which element has the highest atomic number that occurs naturally?',
      options: ['Plutonium', 'Uranium', 'Thorium', 'Radium'],
      correctAnswer: 1,
      explanation: 'Uranium has the highest atomic number (92) of naturally occurring elements.'
    },
    {
      id: 10,
      category: 'science',
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
      correctAnswer: 1,
      explanation: 'Mitochondria are called the powerhouse of the cell because they produce ATP energy.'
    }
  ],
  history: [
    {
      id: 11,
      category: 'history',
      question: 'In which year did World War II end?',
      options: ['1944', '1945', '1946', '1947'],
      correctAnswer: 1,
      explanation: 'World War II ended in 1945 with Japan\'s surrender on September 2, 1945.'
    },
    {
      id: 12,
      category: 'history',
      question: 'Who was the first person to walk on the moon?',
      options: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard'],
      correctAnswer: 1,
      explanation: 'Neil Armstrong was the first person to walk on the moon on July 20, 1969.'
    },
    {
      id: 13,
      category: 'history',
      question: 'Which ancient wonder of the world was located in Alexandria?',
      options: ['Colossus of Rhodes', 'Lighthouse of Alexandria', 'Hanging Gardens', 'Temple of Artemis'],
      correctAnswer: 1,
      explanation: 'The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World.'
    },
    {
      id: 14,
      category: 'history',
      question: 'Who was the first Emperor of Rome?',
      options: ['Julius Caesar', 'Augustus', 'Nero', 'Caligula'],
      correctAnswer: 1,
      explanation: 'Augustus (originally Octavian) was the first Roman Emperor, ruling from 27 BC to 14 AD.'
    },
    {
      id: 15,
      category: 'history',
      question: 'The Berlin Wall fell in which year?',
      options: ['1987', '1988', '1989', '1990'],
      correctAnswer: 2,
      explanation: 'The Berlin Wall fell on November 9, 1989, marking the beginning of German reunification.'
    }
  ],
  sports: [
    {
      id: 16,
      category: 'sports',
      question: 'How many players are on a basketball team on the court at one time?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 1,
      explanation: 'Each basketball team has 5 players on the court at one time.'
    },
    {
      id: 17,
      category: 'sports',
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      correctAnswer: 2,
      explanation: 'France won the 2018 FIFA World Cup held in Russia.'
    },
    {
      id: 18,
      category: 'sports',
      question: 'In tennis, what does "love" mean?',
      options: ['15 points', '30 points', '0 points', '40 points'],
      correctAnswer: 2,
      explanation: 'In tennis, "love" means zero points or no score.'
    },
    {
      id: 19,
      category: 'sports',
      question: 'How many holes are played in a regulation round of golf?',
      options: ['16', '18', '20', '22'],
      correctAnswer: 1,
      explanation: 'A regulation round of golf consists of 18 holes.'
    },
    {
      id: 20,
      category: 'sports',
      question: 'Which sport is known as "America\'s Pastime"?',
      options: ['Basketball', 'American Football', 'Baseball', 'Hockey'],
      correctAnswer: 2,
      explanation: 'Baseball is traditionally known as "America\'s Pastime".'
    }
  ]
};