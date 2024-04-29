/* eslint-disable @next/next/no-img-element */
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { ProjectType } from "../utils/constants";

type ProjectContainerProps = {
  project: ProjectType;
};

const ProjectContainer: React.FC<ProjectContainerProps> = (props) => {
  const { project } = props;

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      className="project"
      variants={{
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: 0.3 }}
      viewport={{ root: containerRef }}
    >
      <h3 className="font-someType mb-2">{project.name}</h3>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mr-5 relative rounded image-container mb-4 md:mb-0">
          <img
            src={project.imgUrl}
            alt={`${project.name} Snapshot`}
            className="rounded-xl max-h-[280px]"
            ref={containerRef}
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <p>{project.description}</p>

          <div className="flex flex-wrap mt-4">
            {project.skills.map((skill) => {
              return (
                <div
                  key={`Project ${project.name} ${skill}`}
                  className="pill-tag"
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectContainer;
