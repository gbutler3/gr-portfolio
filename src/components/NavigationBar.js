import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "@/styles/icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NavigationBar = () => {
  const [mode, setMode] = useThemeSwitcher(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMenuClick = () => {
    console.log("menu link clicked: " + isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-semibold flex items-center text-large justify-between dark:text-light relative">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleMenuClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6  rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <Link
            href={"/"}
            className={`pr-8 hover:underline hover:underline-offset-4 ${isClient && (window.location.pathname.includes('/about')  || window.location.pathname.includes('/projects')) ? '' : 'underline underline-offset-4'}`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`pr-8 hover:underline hover:underline-offset-4 ${isClient && window.location.pathname.includes('/about')  ? 'underline underline-offset-4' : ''}`}
          >
            About
          </Link>
          <Link
            href={"/projects"}
            className={`pr-8 hover:underline hover:underline-offset-4 ${isClient && window.location.pathname.includes('/projects')  ? 'underline underline-offset-4' : ''}`}
          >
            Projects
          </Link>
        </nav>
      </div>

      {isOpen ? (
        <div
          className="min-w-[50vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <Link
              href={"/"}
              className={`hover:underline hover:underline-offset-4 text-light dark:text-dark my-2 ${window.location.pathname.includes('/about')  || window.location.pathname.includes('/projects') ? '' : 'underline underline-offset-4'}`}
              onClick={handleMenuClick}
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className={`hover:underline hover:underline-offset-4 text-light dark:text-dark my-2 ${window.location.pathname.includes('/about') ? 'underline underline-offset-4' : ''}`}
              onClick={handleMenuClick}
            >
              About
            </Link>
            <Link
              href={"/projects"}
              className={`hover:underline hover:underline-offset-4 text-light dark:text-dark my-2 ${window.location.pathname.includes('/projects') ? 'underline underline-offset-4' : ''}`}
              onClick={handleMenuClick}
            >
              Projects
            </Link>
          </nav>
          <div className="flex flex-row align-middle justify-start my-4">
            <Link
              href={"https://www.linkedin.com/in/grace-b-834429188/"}
              target="_blank"
              className="w-7 mx-2"
            >
              <LinkedInIcon />
            </Link>
            <Link href={"https://github.com/gbutler3"} target="_blank" className="w-8 dark:bg-dark bg-light rounded-full">
              <GithubIcon />
            </Link>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-2 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ?  "bg-light text-dark" : "bg-dark text-light" 
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </div>
        </div>
      ) : null}

      <Logo />
      <div className="w-full flex justify-end items-center lg:hidden">
        <nav className="flex justify-between items-center">
          <Link
            href={"https://www.linkedin.com/in/grace-b-834429188/"}
            target="_blank"
            className="w-7 mx-2"
          >
            <LinkedInIcon />
          </Link>
          <Link href={"https://github.com/gbutler3"} target="_blank" className="w-8 ">
            <GithubIcon />
          </Link>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-2 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
