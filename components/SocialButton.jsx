"use client";

import React from "react";

const SocialButton = ({ children, bgColor }) => {
  let bgHoverColorClass;

  switch (bgColor) {
    case "dribbble":
      bgHoverColorClass = "hover:bg-pink-500";
      break;
    case "instagram":
      bgHoverColorClass = "hover:bg-gradient-to-tr from-pink-500 to-yellow-500";
      break;
    case "twitter":
      bgHoverColorClass = "hover:bg-blue-500";
      break;
    case "linkedin":
      bgHoverColorClass = "hover:bg-blue-600";
      break;
    default:
      bgHoverColorClass = "hover:bg-black";
      break;
  }

  return (
    <button
      className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      <div className="fill-black group-hover:fill-white transition-colors duration-200 ease-in-out">
        {children}
      </div>
    </button>
  );
};

export default SocialButton;
