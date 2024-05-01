import React from "react";
import ProjectContainer from "@/app/components/ProjectContainer";
import { projects } from "@/app/utils/constants";

const Projects: React.FC = () => {
  return (
    <section className="mx-auto max-w-4xl flex flex-col item-center pt-8 px-4">
      <h2 className="pb-4 italic font-light primary-text text-center">
        Projects
      </h2>

      {projects.map((project, index) => {
        return (
          <ProjectContainer
            project={project}
            key={project.name}
            reverse={index % 2 === 0}
          />
        );
      })}
    </section>
  );
};

export default Projects;
