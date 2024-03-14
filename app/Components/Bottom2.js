"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import WordAnimate from "./WordAnimate";

const Bottom2 = () => {
  const textanimate = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textanimate,
    offset: ["start 0.9", "end 0.25"],
  });
 
  const val =
    "XIX Premium Vodka is committed to providing a clean & natural experience. Boasting both classic and flavoured vodkas with no artificial flavourings, the Sidemen founded XIX in 2021 and set out to make something for the culture. We are not playing.";
  return (
    <>
      <div className="lg:h-[130vh] sm:hidden w-full lg:flex ">
        <div className="w-[50%] h-full justify-center text-center">
          <div className="relative flex justify-center w-full h-full text-center ">
            <div className="mt-[50px]">
              <Image
                src="/sidemen2.webp"
                alt="image"
                height={150}
                width={150}
              ></Image>
            </div>
            <motion.div
              ref={textanimate}
              className="p-10 mt-[200px]  text-2xl leading-[3rem] tracking-wider font-semibold mont absolute "
            >
              {val.split(" ").map((value, index) => {
                value = value + " ";
                const start = index / val.split(" ").length;
                const end = start + 1 / val.split(" ").length;
                return (
                  <WordAnimate
                    key={index}
                    progress={scrollYProgress}
                    range={[start, end]}
                    value={value}
                  ></WordAnimate>
                );
              })}
              <div className="flex items-center justify-center text-center">
                <Image
                  src="/logo2.svg"
                  height={100}
                  width={100}
                  alt="image logo"
                  className="absolute bottom-0"
                ></Image>
              </div>
            </motion.div>
            <div className="p-10 opacity-20 text-2xl leading-[3rem] tracking-wider font-semibold mont absolute mt-[200px]">
              {val.split("").map((value, index) => {
                return <span key={index}>{value}</span>;
              })}
              <div className="flex items-center justify-center text-center">
                <Image
                  src="/logo2.svg"
                  height={100}
                  width={100}
                  alt="image logo"
                  className="absolute bottom-0"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-[url('/sidemen.jpeg')] bg-no-repeat bg-cover overflow-x-hidden bg-center"></div>
      </div>
    </>
  );
};

export default Bottom2;
