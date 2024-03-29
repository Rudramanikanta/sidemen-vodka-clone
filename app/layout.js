import "./globals.css";
import { Inter } from "next/font/google";
import Transistion from "./Components/Transistion";
import Navbar from "./Components/Navbar";

import { AnimatePresence, animate, motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XIX vodka clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <div className="relative w-full h-full">
          <Navbar></Navbar>
          {children}
        </div>
        <Transistion></Transistion>
      </body>
    </html>
  );
}
