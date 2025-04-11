"use client";

interface Props {
  handleQuizQuestionsNumberClick: (number: number) => void;
  quizQuestionsNumber: number;
}

export const SelectQuizQuestionsNumber = ({ handleQuizQuestionsNumberClick, quizQuestionsNumber }: Props) => (
  <div className="flex w-full gap-[40px] mb-[20px]">
    <button
      className={`cursor-pointer w-full p-2 rounded transition-all ${
        quizQuestionsNumber === 40
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 hover:bg-gray-300"
      }`}
      onClick={() => handleQuizQuestionsNumberClick(40)}
    >
      40 preguntas
    </button>
    <button
      className={`cursor-pointer w-full p-2 rounded transition-all ${
        quizQuestionsNumber === 100
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 hover:bg-gray-300"
      }`}
      onClick={() => handleQuizQuestionsNumberClick(100)}
    >
      100 preguntas
    </button>
    <button
      className={`cursor-pointer w-full p-2 rounded transition-all ${
        quizQuestionsNumber === 200
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 hover:bg-gray-300"
      }`}
      onClick={() => handleQuizQuestionsNumberClick(200)}
    >
      200 preguntas
    </button>
    <button
      className={`cursor-pointer w-full p-2 rounded transition-all ${
        quizQuestionsNumber === 477
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 hover:bg-gray-300"
      }`}
      onClick={() => handleQuizQuestionsNumberClick(477)}
    >
      477 preguntas
    </button>
  </div>
);
