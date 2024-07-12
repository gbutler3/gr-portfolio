import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const NavigationBar = () => {
  return ( 
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
    <nav>
      <Link href={"/"} className="pr-8 text-dark">Home</Link>
      <Link href={"/about"} className="pr-8 text-dark">About</Link>
      <Link href={"/projects"} className="pr-8 text-dark">Projects</Link>
    </nav>
    <Logo />
    <nav className="flex justify-between">
      <Link href={"/"} target="_blank" className="pr-8 text-dark">GitHub</Link>
      <Link href={"/"} target="_blank" className="pr-8 text-dark">LinkedIn</Link>
      <Link href={"/"} target="_blank" className="pr-8 text-dark">Resume</Link>
    </nav>
  </header>
  )
}

export default NavigationBar
