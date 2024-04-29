import { motion } from "framer-motion";
import React from "react";

const Tile: React.FC = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#00a8bf",
        transition: { delay: 0 },
      }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
    />
  );
};

export default Tile;
