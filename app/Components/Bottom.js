"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Letter2 from "./Letter2";
const Bottom = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end end"],
  });

  const angle = useTransform(scrollYProgress, [0, 1], ["-8deg", "-20deg"]);
  const angle2 = useTransform(scrollYProgress, [0, 1], ["10deg", "20deg"]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);

 

  return (
    <div
      ref={ref}
      className="relative  lg:h-[120vh] w-[100%] bg-[#f7f7f7] sm:grid lg:flex gap-x-[9rem]"
    >
      <div className="flex items-center ml-[150px] gap-x-3 w-fit justify-center ">
        <motion.div className="lg:scale-110" style={{ rotate: angle, translateY }}>
          <Image
            src="/bottom2.webp"
            className="lg:scale-110"
            alt="black"
            height={150}
            width={150}
          />
        </motion.div>
        <div className="rotate-[3deg] lg:scale-110 ml-[-15px]">
          <Image className="lg:scale-110" src="/bottom1.webp" alt="black" height={220} width={220} />
        </div>
        <motion.div
          className="mt-[200px] scale-90 lg:scale-125 ml-[-10px]"
          style={{ rotate: angle2, translateY }}
        >
          <Image src="/bottom3.webp" className="lg:scale-110" alt="black" height={120} width={120} />
        </motion.div>
      </div>
      <div className=" text-black tracking-[0.2rem] gap-y-20 mont text-center justify-center items-center">
        <div className="mt-20 ">
        <div className="flex font-extrabold text-black text-9xl">
          {"NEVER".split("").map((value, index) => {
            return <Letter2 value={value} index={index} key={index}></Letter2>;
          })}
        </div>
        <div className="flex font-extrabold text-black text-9xl">
          {"MISS A".split("").map((value, index) => {
            return <Letter2 value={value} index={index} key={index}></Letter2>;
          })}
        </div>
        <div className="flex font-extrabold text-black text-9xl">
          {"DROP".split("").map((value, index) => {
            return <Letter2 value={value} index={index} key={index}></Letter2>;
          })}
        </div>
        </div>
        <div className="gap-10 mt-20 text-left">
          <p>
            Sign up with your email below to be the first to hear when exclusive
            drops hit.
          </p>
          <input className="px-4 py-4 font-thin rounded-lg w-[24rem] mt-9 text-opacity-40" type="email" placeholder="Your email"></input>
          <button className="px-4 py-4 ml-5 text-white bg-black rounded-lg mont">Submit</button>
          <br/>
          <input className="mt-3" type="checkbox"></input>
          <span className="mt-3 ml-2 text-black tracking-[0] text-sm font-[90]">By submitting this form I acknowledge my data may be used for marketing purposes, and I agree to the terms and conditions and privacy policy.</span>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
