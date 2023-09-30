import React from "react";

export default function Title({ children }) {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-7xl font-sans dark:text-white mb-1 md:mb-3 font-bold">
        {children}
      </h1>
    </div>
  );
}
