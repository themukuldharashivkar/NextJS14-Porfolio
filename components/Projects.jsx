"use client";

import ProjectPreview from "./ProjectPreview";
import project1 from "@/public/project-1.png";

const Projects = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
      <ProjectPreview
        name="Flip App"
        description="Next-gen social media"
        imageUrl={project1}
        bgColor="#685cdd"
        dark
      />
      <ProjectPreview
        name="Moneyscape"
        description="Lend and borrow dashboard"
        imageUrl={project1}
        bgColor="#750E21"
        dark
      />
      <ProjectPreview
        name="Admin Onboarding"
        description="Increase user engagement"
        imageUrl={project1}
        bgColor="#940B92"
      />
      <ProjectPreview
        name="Project Dashboard"
        description="Project management app"
        bgColor="#4e4e56"
        dark
      />
      <ProjectPreview
        name="Newsy App"
        description="News aggregator app"
        imageUrl={project1}
        bgColor="#171717"
        dark
      />
      <ProjectPreview
        name="Krypto"
        description="Analyze crypto currency"
        imageUrl={project1}
        bgColor="#005B41"
      />
    </section>
  );
};
export default Projects;
