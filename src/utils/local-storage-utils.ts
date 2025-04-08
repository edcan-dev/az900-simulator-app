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