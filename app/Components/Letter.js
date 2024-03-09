import { useInView } from "react-intersection-observer";
import React from "react";
import { motion } from "framer-motion";
const Letter = ({ value, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const animationdelay = 0.05;
  return (
    <motion.span
      ref={ref}
      initial="hidden"
      custom={index}
      variants={animation}
      transition={{ delay: index * animationdelay }}
      animate={inView ? "visible" : "hidden"}
    >
      {value}
    </motion.span>
  );
};

export default Letter;
