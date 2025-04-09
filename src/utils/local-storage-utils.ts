import { Answer } from "@/types/answers/Answer";
import { QuizResults } from "@/types/results/Results";

export const saveAnswer = (answerId: number, isCorrect: boolean) => {
  const answer = {
    id: answerId,
    isCorrect
  }

  if(localStorage) {
    const answers = localStorage.getItem("answers") || "[]";
    const parsedAnswers = JSON.parse(answers) as any[];
    if(!parsedAnswers.find((answer: any) => answer.id === answerId)) {
      parsedAnswers.push(answer);
      localStorage.setItem("answers", JSON.stringify(parsedAnswers));
    }
  }

}

export const startNewQuiz = () => {
  if(localStorage) {
    localStorage.removeItem("answers");
  }
}

export const saveUserName = (userName: string) => {
  if(localStorage) {
    const existingName = localStorage.getItem('user_name');
    if(existingName) localStorage.removeItem('user_name');
    localStorage.setItem('user_name', userName);
  } 
}

export const getCurrentUserName = (): string => {
  if(localStorage) {
    return localStorage.getItem('user_name') ?? '';
  }
  return '';
}

export const getLastQuizAnswers = (): Answer[] => {
  if(localStorage) {
    const answers = localStorage.getItem("answers") || "[]";
    return JSON.parse(answers) as Answer[];
  }
  return [];
}

export const saveLastQuizResults = (lastQuizResults: QuizResults): void => {
  if(localStorage) {
    const results = getQuizResults();
    results.unshift(lastQuizResults);

    localStorage.removeItem('results');
    localStorage.setItem('results', JSON.stringify(results));
  }
}

export const getQuizResults = (): QuizResults[] => {
  if(localStorage) {
    const results = localStorage.getItem('results') || "[]";
    return JSON.parse(results) as QuizResults[];
  }
  return [];
}