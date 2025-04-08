"use client";

import React, { useState } from "react";
import { SelectOneQuestion as SelectOneQuestionI } from "@/types/questions/Question";
import { QuestionTexts } from "./ui/QuestionTexts";
import { saveAnswer } from "@/utils/local-storage-utils";
import { NextQuestionButton } from '../ui/NextQuestionButton';

interface Props {
  question: SelectOneQuestionI;
  moveToNextQuestion: () => void;
}

export const SelectOneQuestion = ({ moveToNextQuestion, question }: Props) => {

  const [isSelected, setSelected] = useState(false)
  const { id, question_texts, options } = question;

  const evaluateAnswer = () => {
    const radios = document.querySelectorAll(`input[type="radio"]`);

    let selectedAnswer: any = null;

    radios.forEach((radio: any) => {
      if (radio.checked) {
        selectedAnswer = radio;
      }
    });

    let hasError = false;

    if (selectedAnswer == null) hasError = true;

    options && options.forEach((option, index) => {
      if (selectedAnswer.value === option.text && !option.correct) {
        hasError = true;
      }
    });

    saveAnswer(id, !hasError);
    moveToNextQuestion();
  };

  return (
    <>
      <span>
        <h2 className="font-bold text-center text-gray-600">Pregunta {id}</h2>
      </span>

      <QuestionTexts question_texts={question_texts} />

      <div className="mt-4">
        {options &&
          options.map((option, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-[10px] mb-[20px]"
              >
                <input
                  onClick={() => setSelected(true)}
                  type="radio"
                  name={`question-${id}`}
                  id={`option-${index}`}
                  value={option.text}
                  className="w-[20px] h-[20px]"
                />
                <label htmlFor={`option-${index}`} className="text-gray-500">
                  {option.text}
                </label>
              </div>
            );
          })}
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
