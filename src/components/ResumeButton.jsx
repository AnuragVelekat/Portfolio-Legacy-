import React from "react";

const ResumeButton = () => {
  return (
    <div className="flex justify-center mt-4">
      <a
        href="/AnuragVelekatResume.pdf"
        className="text-center inline-block px-8 py-3 w-max text-base font-medium text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 rounded-md"
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
