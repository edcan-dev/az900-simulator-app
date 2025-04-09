'use client';
import { useEffect, useState } from "react";

import React from "react";
import { getCurrentUserName, saveUserName, startNewQuiz } from "@/utils/local-storage-utils";

export const StartExam = () => {



  const [name, setName] = useState<string>('');

  useEffect(() => {
    setName(getCurrentUserName())
  }, [])


  const handleClick = () => {
    saveUserName(name);
    startNewQuiz();
    window.location.href = `/exam/start`;
  }
  
  return (
    <div className="flex">
      <input
        type="text"
        id="name"
        placeholder="Ingresa tu nombre"
        className="w-full p-2 border-none bg-white rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        disabled={!name}
        className={`bg-gray-800 text-white p-2 rounded transition-all ml-2 ${
          !name ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
        }`}
        onClick={handleClick}
      >
        Comenzar
      </button>
    </div>
  );
};
