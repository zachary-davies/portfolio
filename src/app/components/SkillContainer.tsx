import React from "react";
import { SkillType } from "../utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";

type SkillProps = {
  skill: SkillType;
};

const SkillContainer: React.FC<SkillProps> = (props) => {
  const { skill } = props;
  return (
    <motion.div
      className="skill flex items-center font-semibold mr-5 mb-5"
      variants={{
        hidden: { opacity: 0, y: -100 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <Image
        alt={`${skill.name} logo`}
        src={skill.imgUrl}
        height={30}
        width={30}
      />
      <p className="ml-1">{skill.name}</p>
    </motion.div>
  );
};

export default SkillContainer;
