import { Schema } from 'mongoose';

// Defines the structure of a quiz question
interface Question {
  question: string; // The question text
  options: string[]; // The available options for the question
  correctAnswer: string; // The correct answer for the question
}

// Defines the structure of the quiz state
interface Quiz {
  _id?: Schema.Types.ObjectId | string; // Unique ID for the quiz (optional)
  currentQuestion: number; // The current question number
  questions: Question[]; // Array of questions in the quiz
  selectedAnswers: string[]; // Array of selected answers for each question
  isComplete: boolean; // Whether the quiz has been completed or not
  score: number; // The user's score
  totalQuestions: number; // Total number of questions in the quiz
  maxScore: number; // Maximum possible score in the quiz
  answersRemaining: number; // Number of guesses remaining (if applicable)
}

// Represents the structure for responses from the user
interface Response {
  questionIndex: number; // Index of the question answered
  selectedAnswer: string; // The selected answer for this question
  isCorrect: boolean; // Whether the answer is correct or not
}

// A type to store the responses for each quiz (if needed for tracking purposes)
interface Responses {
  [quizId: string]: Response[]; // Mapping quiz ID to an array of responses
}

export type { Quiz, Question, Response, Responses };
