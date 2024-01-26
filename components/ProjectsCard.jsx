"use client";
import Arrow from "@/public/arrow.svg";
import project1 from "@/public/project-1.png";

const ProjectsCard = () => {
  return (
    <div
      className={`h-[30rem] rounded-3xl overflow-hidden `}
      style={{ background: "#685cdd" }}
    >
      <div
        className={`h-full w-full px-10 py-6 duration-[500ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out`}
        style={{ backgroundImage: `url(${project1.default})` }}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium text-lg dark:text-white">Flip App</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              Next-gen social media
            </p>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
            {/* <Arrow className="w-6 h-6" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
