import React from "react";

interface Props {
  isSelected: boolean;
  evaluateAnswer: () => void;
}

export const NextQuestionButton = ({ evaluateAnswer, isSelected }: Props) => {
  return (
    <button
      disabled={!isSelected}
      className={`bg-gray-700 text-white px-[20px] py-[10px] rounded-md  transition duration-200 ${
        !isSelected
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-gray-700 cursor-pointer "
      }`}
      onClick={evaluateAnswer}
    >
      Siguiente
    </button>
  );
};
