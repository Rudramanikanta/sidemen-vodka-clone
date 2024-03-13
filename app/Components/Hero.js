"use client"
import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import {gsap} from 'gsap'
const Hero = () => {
  const ref=useRef(null);
  const ref2=useRef(null);

  useEffect(()=>{
  gsap.fromTo(
    ref.current,
    {
      y:100,
      opacity:0,
      
    },
    {
      y:0,
      opacity:1,
      duration:2,
      ease:'power4.out'
    }
  )
  gsap.fromTo(
    ref2.current,
    {
      y:100,
      opacity:0,
      
    },
    {
      y:0,
      opacity:1,
      delay:0.2,
      duration:2,
      ease:'power4.out'
    }
  )},[])
  return (
    <div className="items-center justify-center overflow-hidden text-center home-hero-content">
        <div className="relative mb-10">
          <div className='overflow-hidden h-fit'>
          <h1 ref={ref} className="font-black tracking-[0.70rem] text-7xl  ">MIXED</h1>
          </div>
          <div className='overflow-hidden h-fit'>
          <h1 ref={ref2} className="font-light tracking-wide syn text-7xl object-fit">
            BERRY
          </h1>
          </div>
          <button className="group px-5 z-[10] py-3 mt-10 text-black bg-white rounded-lg syn">
            <div className="h-5 overflow-hidden font-light">
              <p className=" animate duration-300 ease-in group-hover:translate-y-[-100%] font-semibold">out now</p>
              <p className=" animate duration-300 ease-in group-hover:translate-y-[-100%] font-semibold">out now</p>
            </div>
          </button>
        </div>
      </div>
  )
}

export default Hero