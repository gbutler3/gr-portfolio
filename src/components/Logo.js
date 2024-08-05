import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


const MotionLink = motion(Link)
const Logo = () => {
  return (
    <div className='flex items-center mt-2 justify-center'>
      <MotionLink href={"/"} className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
      whileHover={{
        backgroundColor:["#BC6C25", "#DDA15E", "#CBEEF3", "#283618", "#BC6C25", "#DDA15E",  "#283618"],
        transition: { duration: '3', repeat: Infinity},
        scale: 1.3
          }}>GB</MotionLink>
    </div>
  )
}

export default Logo
