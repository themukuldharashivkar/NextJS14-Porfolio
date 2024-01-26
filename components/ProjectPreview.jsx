"use client";

import Arrow from "@/public/arrow.svg";
import project1 from "@/public/project-1.png";
import { FaLongArrowAltUp } from "react-icons/fa";

const ProjectPreview = ({ name, description, imageUrl, bgColor, dark }) => {
  return (
    <div
      className={`h-[30rem] rounded-3xl overflow-hidden `}
      style={{ background: `${bgColor}` }}
    >
      <div
        className={`h-full w-full px-10 py-6 duration-[500ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out`}
        style={{ backgroundImage: `url(/project-1.png)` }}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium text-lg dark:text-white">{name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              {description}
            </p>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <FaLongArrowAltUp className="w-6 h-6 rotate-45 text-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};

export default ProjectPreview;
