"use client";

import {  useEffect, useState } from "react";
import { CurrentQuestion } from "./CurrentQuestion";
import { redirect } from "next/navigation";

interface Props {
  questions: any[];
}

export const QuestionsContainer = ({ questions }: Props) => {


  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  
  useEffect(() => {
    if(currentQuestionIndex === questions.length ) {
      redirect('/results');
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);
  

  return (
    <section className="w-full rounded-md max-w-[1000px] mt-[80px] m-auto bg-gray-200 p-[40px]">
      <CurrentQuestion question={currentQuestion} moveToNextQuestion={
        () => setCurrentQuestionIndex(currentQuestionIndex + 1)
      } />
    </section>
  );
};
