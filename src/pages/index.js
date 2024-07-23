import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";

import profileImage from "../../public/profileImage.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { DownloadResume, LinkArrow } from "@/styles/icons";
import HireMe from "@/components/HireMe";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <>
      <Head>
        <title>Grace Reed | Home</title>
        <meta title="Grace Reed | Home" content="Home Page" />
      </Head>
      <main className="flex items-center w-full min-h-screen dark:text-light">
        <Layout className="pt-0 lg:!flex lg:!flex-col md:pt-16 sm:pt-8">   
          <div className="flex items-center justify-between w-full lg:flex-col 3xl:!-mt-4 2xl:!-mt-4 xl:!-mt-4 lg:!-mt-4">
          <Image
              src={profileImage}
              alt="GraceReed"
              className="w-10/12 h-auto bg-lightGreen dark:bg-mediumBlue rounded-full 3xl:hidden 2xl:hidden xl:hidden lg:inline-block lg:!w-[25vw] md:inline-block "
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw,"
            />
            <div
              className="w-1/2 flex flex-col items-center self-center justify-around " >
              <AnimatedText
                text={"Hi, I'm Grace"}
                className="!text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <AnimatedText
                className="!text-left my-4 text-base font-medium lg:w-full lg:text-center md:!text-sm sm:!text-xs"
                text={
                  "Full stack web developer with a focus on Frontend web development. Dedicated to turning ideas into innovative web applications."
                }
              />
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href={"/Grace Reed Resume"}
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border
                   dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:border dark:border-light dark:hover:text-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <DownloadResume className={"ml-1 !w-5"} />
                </Link>
                <Link
                  href={"mailto:gmx.butler@gmail.com"}
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-4 dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <Image
                src={profileImage}
                alt="GraceReed"
                className="w-9/12 h-auto bg-lightGreen dark:bg-mediumBlue rounded-full lg:hidden md:hidden sm:hidden xs:hidden "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
