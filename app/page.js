"use client";
import { useEffect } from "react";
import Image from "next/image";
import TextAnimate from "./Components/TextAnimate";
import Hero from "./Components/Hero";
import "./globals.css";
import { motion } from "framer-motion";
import Scroll from "./Components/Scroll";
import { useInView } from "react-intersection-observer";
import Letter from "./Components/Letter";
export default function Home() {
  return (
    <div className="items-center overflow-x-hidden z-[10] justify-center w-full h-full text-center">
      <Hero></Hero>
      <Scroll></Scroll>
      <div className="h-[30vh] text-2xl ml-20 mr-20  font-light justify-center items-center text-center flex border-b-[2px] border-gray-700/50">
        Our Drinks
      </div>
      <div className="p-10 ml-[40px] mr-[40px] border-b-[2px] border-gray-700/50 flex justify-between">
        <div className="flex items-center text-center gap-x-3">
          <Image
            src="/berrrydrink.png"
            height="100"
            width="100"
            alt="drink"
          ></Image>
          <div className="overflow-hidden h-fit">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                },
              }}
              className="text-5xl font-extrabold syn"
            >
              {"MIXED BERRY".split("").map((value, index) => {
                return (
                  <Letter value={value} index={index} key={index}></Letter>
                );
              })}
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center text-center gap-x-2">
          <button className=" h-fit border-[2px] py-2 px-8 border-gray-700/50 rounded-lg font-light">
            View details
          </button>
          <button className="h-fit border-[2px] py-[0.9rem] px-4 border-gray-700/50 rounded-lg font-light">
            <Image src="/add.svg" height={10} width={10} alt="add"></Image>
          </button>
        </div>
       
      </div>
    </div>
  );
}
