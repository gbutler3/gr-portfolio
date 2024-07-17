import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "@/styles/icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NavigationBar = () => {
  const [mode, setMode] = useThemeSwitcher(0);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href={"/"} className="pr-8 text-dark">
          Home
        </Link>
        <Link href={"/about"} className="pr-8 text-dark">
          About
        </Link>
        <Link href={"/projects"} className="pr-8 text-dark">
          Projects
        </Link>
      </nav>
      <Logo />
      <nav className="flex justify-between items-center">
        <Link
          href={"https://www.linkedin.com/in/grace-b-834429188/"}
          target="_blank"
          className="w-7 mx-1"
        >
          <LinkedInIcon />
        </Link>
        <Link href={"/"} target="_blank" className="w-7 mx-1">
          <GithubIcon />
        </Link>
        <button onClick={() => setMode(mode === "light" ? "dark": "light")} className="ml-3 flex items-center justify-center rounded-full p-1">
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
