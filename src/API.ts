import { shuffleArray } from "./Utils";
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type QuestionState = Question & { answers: string[] };
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&difficylty=${difficulty}&type=multiple`
  );
  const data = await response.json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]), // All The Answers in UI
  }));
};
