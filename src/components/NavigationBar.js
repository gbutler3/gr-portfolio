import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, DownloadResume } from '@/styles/icons'

const NavigationBar = () => {
  return ( 
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
    <nav>
      <Link href={"/"} className="pr-8 text-dark">Home</Link>
      <Link href={"/about"} className="pr-8 text-dark">About</Link>
      <Link href={"/projects"} className="pr-8 text-dark">Projects</Link>
    </nav>
    <Logo />
    <nav className="flex justify-between items-center">
      <Link href={"https://www.linkedin.com/in/grace-b-834429188/"} target="_blank" className="w-7 mx-1"><LinkedInIcon/></Link>
      <Link href={"/"} target="_blank" className="w-7 mx-1"><GithubIcon/></Link>
    </nav>
  </header>
  )
}

export default NavigationBar
