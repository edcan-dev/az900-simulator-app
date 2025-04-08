'use client';

import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {

  const pathname = usePathname();

  return (
    <header>
      <nav className="bg-gray-800 h-[80px] flex items-center">
        <div className="container mx-auto">
          <h1 className="text-white text-center">
            {
              pathname === "/exam/start" ? (
                ''
              ) : (
                'Simulador AZ-900'
              )
            }
          </h1>
        </div>
      </nav>
    </header>
  );
};
