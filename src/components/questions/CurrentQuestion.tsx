"use client";

import { Question } from "@/types/questions/Question";
import { CheckBoxQuestion } from "./CheckBoxQuestion";
import { SelectOneQuestion } from "./SelectOneQuestion";
import { useState } from "react";

interface Props {
  question: Question,
  moveToNextQuestion: () => void;
}

export const CurrentQuestion = ({ question, moveToNextQuestion }: Props) => {

  const renderCurrentQuestion = () => {

    switch (question.type) {
      case 'checkbox':
        return <CheckBoxQuestion
          question={question}
          moveToNextQuestion={moveToNextQuestion}
        />;
      case 'select_one':
        return <SelectOneQuestion
        question={question}
        moveToNextQuestion={moveToNextQuestion}
        />;
      default:
        return <p>default</p>;
    }

  }


  return (
    <>{renderCurrentQuestion()}</>
  );
};
