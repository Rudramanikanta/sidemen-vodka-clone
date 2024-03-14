"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TextAnimate from './TextAnimate'
const Final = () => {
  return (
    <div className="w-full lg:h-[50vh] ">
        <div className="h-[75%] flex ml-10 mr-[3rem] border-b-[2px] border-gray-700/50 items-center justify-between min-w-full px-3 py-3 text-lg font-semibold text-center bg-black mont">
          <div className="flex items-start justify-center p-4 ml-10 gap-x-10">
            <div className="group">
              <div className={`h-[36px]  overflow-hidden`}>
                <Image
                  src="/logo2.svg"
                  className="group-hover:translate-y-[-100%] mb-2 animate duration-500"
                  height={100}
                  width={100}
                  alt="logo"
                ></Image>
                <Image
                  src="/logo2.svg"
                  className="group-hover:translate-y-[-100%] animate duration-300"
                  height={100}
                  width={100}
                  alt="logo"
                ></Image>
              </div>
            </div>
            <Image src="/logo.svg" alt="logo" height={100} width={100}></Image>
          </div>
          <div className="flex items-center justify-center overflow-hidden  gap-x-7 mont  h-[25px]">
            <div className="flex items-center justify-center  gap-x-7 mt-[13px]">
              <TextAnimate text="Top of page"></TextAnimate>
              <TextAnimate text="Message us"></TextAnimate>
            </div>
          </div>
          <div className="flex justify-between mr-20 gap-x-2">
            <div className="p-[9px] hover:border-white  rounded-full h-fit w-fit border border-gray-800">
              <Link href="https://www.instagram.com/rudra_abburi/">
                <Image
                  src="/tiktok.png"
                  height={12}
                  width={12}
                  alt="tik"
                ></Image>
              </Link>
            </div>
            <div className="p-[9px] hover:border-white  rounded-full h-fit w-fit border border-gray-800">
              <Link href="https://www.instagram.com/rudra_abburi/">
                <Image
                  src="/insta.svg"
                  height={12}
                  width={12}
                  alt="tik"
                ></Image>
              </Link>
            </div>
            <div className="p-[9px] hover:border-white  rounded-full h-fit w-fit border border-gray-900">
              <Link href="https://twitter.com/RudraAbburi">
                <Image
                  src="/twitter.png"
                  height={12}
                  width={12}
                  alt="tik"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-10 ml-10 mr-10 mont bottom-20">
        <div className="items-start">
          <p>© XIX Vodka Ltd 2024  Site by <Link className="underline opacity-50" href="https://protfolio-3d-rudra.vercel.app/">Rudra</Link></p>
          </div>
          <div className="flex overflow-hidden  gap-x-7 mont  h-[25px]">
            <div className="flex items-center justify-center opacity-50  gap-x-7 mt-[13px]">
              <TextAnimate text="Refunds policy"></TextAnimate>
              <TextAnimate text="Shipping policy"></TextAnimate>
              <TextAnimate text="T & C&rsquo;s"></TextAnimate>
              <TextAnimate text="Privacy policy"></TextAnimate>
              
            </div>
          </div>
        </div>
        
      </div>
  )
}

export default Final