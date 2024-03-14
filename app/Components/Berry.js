import React from 'react'
import Letter from './Letter';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"
const Berry = () => {
    const [hidden, sethidden] = useState(false);
  return (
    <div className="p-10 ml-[2rem] mr-[2rem] border-b-[2px]  border-gray-700/50">
        <div className="lg:flex items-center justify-between text-center">
          <div className="flex items-center justify-center text-center gap-x-3">
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
            <button
              className=" h-fit border-[2px] py-2 px-8 border-gray-700/50 rounded-lg font-light"
              onClick={() => sethidden((current) => !current)}
            >
              <div className="text-white group mont">
                <div className="overflow-hidden h-[30px]">
                  <div className={hidden?"mt-1 animate duration-300 ease-in translate-y-[-100%]":"mt-1 animate duration-300 ease-in "}>
                    View details
                  </div>
                  <div className={hidden?"mt-0 animate duration-300 ease-in translate-y-[-100%]":"mt-1 animate duration-300 ease-in "}>
                    Hide details
                  </div>
                </div>
              </div>
            </button>
            <button
              className="h-fit border-[2px] py-[1rem] px-4 border-gray-700/50 rounded-lg font-light "
              onClick={() => sethidden((current) => !current)}
            >
              <Image
                className={
                  hidden
                    ? "rotate-0 transition-all duration-150"
                    : "rotate-45 transition-all duration-150"
                }
                src="/add.svg"
                height={10}
                width={10}
                alt="add"
              ></Image>
            </button>
          </div>
        </div>
        {hidden && (
          <div className="items-start transition-all animation duration-300 rounded-xl justify-start p-12 mt-10 lg:flex bg-[#0a0a0a]">
            <div className="ml-12">
              <h2 className="bg-[#0a0a0a] opacity-50 mb-5 ">About</h2>
              <p className="mb-5 mont">
                Be one of the first to get your hands on the bottle.
              </p>
              <p className="mb-5 leading-10 mont">
                If you want to try before you buy, get down to Wetherspoons this
                week
              </p>
              <p className="mb-5 mont tracking-[0.7] leading-10">
                Sweet & fruity, you&rsquo;ll love it. Strawberry, blackberry,
                raspberry and blueberry flavours give XIX Mixed Berry Vodka a
                satisfying finish.
              </p>
              <p className="mb-5 bg-[#0a0a0a] opacity-50">70CL, 40VOL</p>
              <button
                className="mb-5 mt-5 hover:border-white mont h-fit border-[2px] py-2 px-8 border-gray-700/50 rounded-lg font-light"
                onClick={() => console.log("clicked")}
              >
                Find us in Wetherspoons
              </button>
            </div>
            <div>
              <Image
                src="/berry.webp"
                height="200"
                className="h-[400px] rounded-lg w-[750px] object-cover"
                width="200"
                alt="image 1"
              ></Image>
            </div>
          </div>
        )}
      </div>
  )
}

export default Berry