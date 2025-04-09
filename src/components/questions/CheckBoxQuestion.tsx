"use client";

import React, { useState } from "react";
import { CheckBoxQuestion as CheckBoxQuestionI  } from "@/types/questions/Question";
import { saveAnswer } from "@/utils/local-storage-utils";
import { QuestionTexts } from "./ui/QuestionTexts";
import { NextQuestionButton } from '../ui/NextQuestionButton';

interface Props {
  question: CheckBoxQuestionI
  moveToNextQuestion: () => void;
}


export const CheckBoxQuestion = ({ question, moveToNextQuestion }: Props) => {

  const [isSelected, setSelected] = useState(false)
  const { id, question_texts, options } = question;

  const evaluateAnswer = () => {

    const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);

    const selectedAnswers: any = [];

    checkboxes.forEach((checkbox: any) => {
      if (checkbox.checked) {
        selectedAnswers.push(checkbox);
      }
    });

    let hasError = false;

    options && options.forEach((option, index) => {

      const isChecked = selectedAnswers.some((selectedAnswer: any) => selectedAnswer.value === option.text);

      if(isChecked && !option.correct) {
        hasError = true;
      }
      if(!isChecked && option.correct) {
        hasError = true;
      }
    
    })

    if(selectedAnswers.length == 0) hasError = true;
    
    saveAnswer(id, !hasError);
    moveToNextQuestion();
  }


  return (
    <>
      <span>
        <h2 className="font-bold text-center text-gray-600">Pregunta {id}</h2>
      </span>

      <QuestionTexts question_texts={question_texts} />

      <div className="flex flex-wrap justify-between gap-[10px] w-full mb-[40px] mt-[40px]">
        {
          options && options.map((question_text, index) => (
            <div key={index} className="flex items-center mr-[20px] bg-white p-[10px] rounded-md shadow-md">
              <input 
                type="checkbox" 
                id={`checkbox-${id}-${index}`} 
                value={question_text.text} 
                className="mr-[10px]"
                onClick={() => setSelected(true)}
              />
              <label htmlFor={`checkbox-${id}-${index}`} className="text-gray-500 select-none">{question_text.text}</label>
            </div>
          ))
        }
      </div>

      <div className="w-full flex justify-center">
        <NextQuestionButton
          evaluateAnswer={evaluateAnswer}
          isSelected={isSelected}
        />
      </div>
    </>
  );
};
