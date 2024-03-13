import React from "react";
import TextAnimate from "./TextAnimate";
import Image from "next/image";
import ImageAnimate from "./ImageAnimate";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="absolute z-10 flex items-center justify-between min-w-full px-3 py-3 text-lg font-semibold text-center bg-black mont">
      <div className="flex mt-4 ml-[50px] gap-x-10 md:flex sm:hidden">
        <TextAnimate text="Shops"></TextAnimate>
        <TextAnimate text="Drops"></TextAnimate>
        <TextAnimate text="About"></TextAnimate>
      </div>
      <div className="items-center justify-center overflow-hidden test-center">
        <ImageAnimate path="/logo.svg" height="60" width="60"></ImageAnimate>
      </div>
      <div className="mr-[50px] flex items-center justify-center md:flex sm:hidden text-center gap-x-7">
       
        <div className="overflow-hidden group h-[35px]">
          <div className="mt-1 animate duration-300 ease-in group-hover:translate-y-[-100%]">
            Message
          </div>
          <div className="animate duration-300 ease-in group-hover:translate-y-[-100%]">
          Message
          </div> 
        </div>
        <div className="flex justify-between gap-x-2">
          <div className="p-[9px] hover:border-white  rounded-full h-fit w-fit border border-gray-800">
            <Link href="https://www.instagram.com/rudra_abburi/">
            <Image src="/tiktok.png" height={12} width={12} alt="tik"></Image>
            </Link>
          </div>
          <div className="p-[9px] hover:border-white  rounded-full h-fit w-fit border border-gray-800">
          <Link href="https://www.instagram.com/rudra_abburi/">
            <Image src="/insta.svg" height={12} width={12} alt="tik"></Image>
            </Link>
          </div>
          <div className="p-[9px] hover:border-white  rounded-full h-fit w-fit border border-gray-900">
          <Link href="https://twitter.com/RudraAbburi">
            <Image src="/twitter.png" height={12} width={12} alt="tik"></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
