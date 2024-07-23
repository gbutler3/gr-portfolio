import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "@/styles/icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NavigationBar = () => {
  const [mode, setMode] = useThemeSwitcher(0);

  return (
    <header className="w-full px-32 py-8 font-semibold flex items-center text-large justify-between dark:text-light">
      <nav>
        <Link href={"/"} className="pr-8 hover:underline hover:underline-offset-2">
          Home
        </Link>
        <Link href={"/about"} className="pr-8 hover:underline hover:underline-offset-2">
          About
        </Link>
        <Link href={"/projects"} className="pr-8 hover:underline hover:underline-offset-2">
          Projects
        </Link>
      </nav>
      <Logo />
      <nav className="flex justify-between items-center">
        <Link
          href={"https://www.linkedin.com/in/grace-b-834429188/"}
          target="_blank"
          className="w-7 mx-2"
        >
          <LinkedInIcon />
        </Link>
        <Link href={"/"} target="_blank" className="w-8 ">
          <GithubIcon />
        </Link>
        <button onClick={() => setMode(mode === "light" ? "dark": "light")} className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }`}>
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default NavigationBar;
