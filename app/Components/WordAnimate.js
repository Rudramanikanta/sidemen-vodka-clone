"use client"
import React, { useEffect } from 'react'
import {motion,useTransform} from "framer-motion"

const WordAnimate = ({progress,range,value}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return <span>
    
    <motion.span style={{opacity: opacity}}>{value}</motion.span>
    </span>
}

export default WordAnimate