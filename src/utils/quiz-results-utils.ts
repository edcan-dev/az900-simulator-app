import { Answer } from "@/types/answers/Answer";

export const getCorrectPercentage = (answers: Answer[]): number => {
  const correctAnswers = answers.filter((a) => a.isCorrect);
  return (correctAnswers.length * 100) / answers.length;
};

export const getNotCorrectPercentage = (answers: Answer[]): number => {
  const correctAnswers = answers.filter((a) => !a.isCorrect);
  return (correctAnswers.length * 100) / answers.length;
};
