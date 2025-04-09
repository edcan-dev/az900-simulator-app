"use client";

import { QuizResults } from "@/types/results/Results";
import { getQuizResults } from "@/utils/local-storage-utils";
import React, { useEffect, useState } from "react";

export const ResultsGrid = () => {
  const [quizResults, setQuizResults] = useState<QuizResults[]>([]);

  useEffect(() => {
    setQuizResults(getQuizResults());
  }, []);

  return (
    <>
      <span>
        {quizResults.length === 0 ? (
          <p className="text-gray-500 text-justify">
            Todavia no hay resultados disponibles.
          </p>
        ) : (
          <table className="bg-gray-300 rounded-md w-full mb-[20px]">
            <thead>
              <tr>
                <th className="text-start p-[10px] border-b-4 border-b-gray-700 inline-block w-1/3">
                  Nombre
                </th>
                <th className="text-start p-[10px] border-b-4 border-b-gray-700 inline-block w-1/3">
                  Porcentaje
                </th>
                <th className="text-start p-[10px] border-b-4 border-b-gray-700 inline-block w-1/3">
                  Resultado
                </th>
              </tr>
            </thead>

            <tbody>
              {quizResults.map(
                ({
                  id,
                  userName,
                  correctAnswers,
                  isApproved,
                  totalAnswers,
                }) => (
                  <tr key={id}>
                    <td className="text-start p-[10px] inline-block w-1/3">
                      {userName}
                    </td>
                    <td className="text-start p-[10px] inline-block w-1/3">
                      {(correctAnswers * 100) / totalAnswers} %
                    </td>
                    <td className="text-start p-[10px] inline-block w-1/3">
                      {isApproved ? (
                        <div className="bg-emerald-600 text-white p-[10px] rounded-md">
                          <p className="">Aprobado</p>
                        </div>
                      ) : (
                        <div className="bg-red-900 text-white p-[10px] rounded-md">
                          <p className="">No Aprobado</p>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </span>
    </>
  );
};
