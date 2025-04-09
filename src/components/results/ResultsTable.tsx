"use client";

import { Answer } from "@/types/answers/Answer";
import { QuizResults } from "@/types/results/Results";
import { getCurrentUserName, getLastQuizAnswers, getQuizResults, saveLastQuizResults } from "@/utils/local-storage-utils";
import { getCorrectPercentage, getNotCorrectPercentage } from "@/utils/quiz-results-utils";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export const ResultsTable = () => {
  
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const answersFromLocalStorage = getLastQuizAnswers();
    if (answersFromLocalStorage.length === 0) redirect("/");
    setAnswers(answersFromLocalStorage);
  }, []);

  const isApproved = getCorrectPercentage(answers) >= 70;

  const handleClick = () => {
    const lastQuizResults: QuizResults = {
      id: getQuizResults().length + 1,
      userName: getCurrentUserName(),
      totalAnswers: answers.length,
      correctAnswers: answers.filter(a => a.isCorrect).length,
      isApproved
    }
    saveLastQuizResults(lastQuizResults);
    redirect('/');
  }

  return (
    <>
      <div>
        <span>
          <h2 className="font-bold">Respuestas Totales {answers?.length}</h2>
        </span>
      </div>

      <table className="bg-gray-300 rounded-md w-full mb-[20px]">
        <thead className="w-full">
          <tr>
            <th className="text-start p-[10px] border-b-4 border-b-gray-700 inline-block w-1/2">
              Concepto
            </th>

            <th className="text-start p-[10px] border-b-4 border-b-gray-700 inline-block w-1/2">
              Porcentaje
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="text-start p-[10px] inline-block w-1/2">
              Respuestas Correctas
            </td>
            <td className="text-start p-[10px] inline-block w-1/2">
              {getCorrectPercentage(answers).toString()} %
            </td>
          </tr>
          <tr>
            <td className="text-start p-[10px] inline-block w-1/2">
              Respuestas No Correctas
            </td>
            <td className="text-start p-[10px] inline-block w-1/2">
              {getNotCorrectPercentage(answers).toString()} %
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mb-[40px]">
        {isApproved ? (
          <div className="bg-emerald-600 text-white p-[10px] rounded-md">
            <p className="">Examen Aprobado</p>
          </div>
        ) : (
          <div className="bg-red-900 text-white p-[10px] rounded-md">
            <p className="">Examen No Aprobado</p>
          </div>
        )}
      </div>

      <div className="flex w-full justify-end">
        <button 
          className="bg-gray-700 text-white p-[10px] rounded-md hover:bg-gray-900 transition-all cursor-pointer"
          onClick={ () =>  handleClick() }
        >
        Regresar al Inicio
        </button>
      </div>
    </>
  );
};
