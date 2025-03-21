"use client";
import { useState } from "react";
const FAQList = ({ qa }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <li key={qa.question}>
      {/* Where the question appears */}
      <button
        className="py-6 px-6 font-bold border-b border-black w-full flex items-center justify-between"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <p>{qa.question}</p>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </button>
      {/* Where the answer appears */}
      {
        <div className={`${isOpen ? "block" : "hidden"} mt-3 mb-6`}>
          {qa.answer}
        </div>
      }
    </li>
  );
};

export default FAQList;
