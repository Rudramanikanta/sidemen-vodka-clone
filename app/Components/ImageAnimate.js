import React from 'react'
import Image from 'next/image'
const ImageAnimate = ({path,height,width}) => {

  return (
    <div className='group'>
    <div className={`h-[26px]  overflow-hidden`}>
    <Image
      src={path}
      className="group-hover:translate-y-[-100%] mb-2 animate duration-500"
      height={height}
      width={width}
      alt="logo"
    ></Image>
    <Image
      src={path}
      className="group-hover:translate-y-[-100%] animate duration-300"
      height={height}
      width={width}
      alt="logo"
    ></Image>
  </div>
  </div>
  )
}

export default ImageAnimate