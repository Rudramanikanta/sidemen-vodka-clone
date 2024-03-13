"use client";
import React,{useState} from "react";
import { motion, anim } from "framer-motion";
import Image from "next/image";
const Transistion = () => {
  const [completed,setCompleted]=useState(false)
  return (
    <motion.div
    initial={{opacity: 1}}
    animate={{
      opacity: 0,
      display: completed ? "flex" : "none"
    }}
    onAnimationComplete={() => setCompleted(false)}
      duration="3"
      
      variants= {{
        hidden: { y: -100, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        },
      }}
      className="fixed top-0 left-0 flex items-center justify-center w-full h-screen text-center bg-black z-[9]"
    >
      <Image src="/logo.svg" alt="logo" height={70} width={70}></Image>
    </motion.div>
  );
};

export default Transistion;
