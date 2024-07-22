import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";

import profileImage from "../../public/profileImage.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { DownloadResume, LinkArrow } from "@/styles/icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Grace Reed | A Bit About Me</title>
        <meta title="A Bit About Me" content="About Page" />
      </Head>
      <main className="flex items-center w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex flex-col items-center self-center justify-around" style={{marginTop: '-15em'}}>
              <AnimatedText text={"Hi, I'm Grace"} className="!text-left" />
              <AnimatedText
                className="!text-left my-4 text-base font-medium"
                text={
                  "Full stack web developer with a focus on Frontend web development. Dedicated to turning ideas into innovative web applications."
                }
              />
              <div className="flex items-center self-start mt-2">
                <Link
                  href={"/Grace Reed Resume"}
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border
                   dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:border dark:border-light dark:hover:text-dark"
                  download={true}
                >
                  Resume
                  <DownloadResume className={"ml-1 !w-5"} />
                </Link>
                <Link
                  href={"mailto:gmx.butler@gmail.com"}
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-4 dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <Image
                src={profileImage}
                alt="GraceReed"
                className="w-10/12 h-auto bg-lightGreen dark:bg-mediumBlue rounded-full"
              />
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  );
}
