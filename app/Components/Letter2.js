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
  const animationdelay = 0.2;
  if(value===" "){
    return(
        <div>&nbsp;</div>
    )
  }
  return (
    <motion.p
      ref={ref}
      initial="hidden"
      custom={index}
      variants={animation}
      transition={{ delay: index * animationdelay }}
      animate={inView ? "visible" : "hidden"}
    >
  
      {value}
    </motion.p>
  );
};

export default Letter;
