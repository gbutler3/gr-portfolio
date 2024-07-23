import React from "react";
import { WebDevCircle } from "@/styles/icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-1 bottom-10 flex items-center justify-center overflow-hidden md:hidden">
      <div className="w-72 h-auto flex items-center justify-center relative">
        <WebDevCircle className={"fill-dark max-h-52 animate-spin-slow"} /> 
        <Link
          href={"mailto:gmx.butler@gmail.com"}
          target="_blank"
          style={{ left: "7.2em", top: "5.2em"}}
          className="flex items-center justify-center absolute -translate-x-1/2 -translate-y-1/2 bg-mediumBlue text-dark
          shadow-md border broder-solid border-lightGreen w-28 h-28 rounded-full font-bold text-xl hover:bg-lightGreen hover:border-lightGreen dark:bg-lightGreen dark:border-lightGreen dark:hover:bg-mediumBlue dark:hover:border-mediumBlue
        " 
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
