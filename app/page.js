"use client";
import Bottom from "./Components/Bottom";
import Hero from "./Components/Hero";
import "./globals.css";
import Berry from "./Components/Berry";
import Scroll from "./Components/Scroll";
import Orginal from "./Components/Orginal";
import Bottom2 from "./Components/Bottom2";
import Final from "./Components/Final";
export default function Home() {
  return (
    <div className=" overflow-x-hidden z-[10]  w-full h-full">
      <Hero></Hero>
      <Scroll></Scroll>
      <div
        id="drinks"
        className="h-[30vh] mont text-2xl ml-[2rem] mr-[2rem]  font-light justify-center items-center text-center flex border-b-[2px] border-gray-700/50"
      >
        Our Drinks
      </div>
      <Berry></Berry>
      <Orginal></Orginal>
      <div className="h-[35vh] w-full block"></div>
      <Bottom></Bottom>
      <Bottom2></Bottom2>
      <Final></Final>
    </div>
  );
}
