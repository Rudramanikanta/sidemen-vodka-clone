import React from 'react'

const TextAnimate = ({text}) => {
  return (
    <div className='text-white group mont'>
      <div className='overflow-hidden h-[50%]'>
      <div className='mt-1 animate duration-300 ease-in group-hover:translate-y-[-100%]'>{text}</div>
      <div className='animate duration-300 ease-in group-hover:translate-y-[-100%]'>{text}</div>
      </div>
    </div>
  )
}

export default TextAnimate