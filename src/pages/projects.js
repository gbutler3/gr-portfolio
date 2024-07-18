import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/styles/icons";
import profileImage from "../../public/profileImage.png";

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid bg-light shadow-2xl border-dark p-12">
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={image} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-lightGreen text-xl font-bold">{type}</span>
        <Link href={link} alt={title} className='hover:underline underline-offset-2'>
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className=" my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} alt={title} className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} alt={title} className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, image, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark p-6 bg-light relative">
        <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
          <Image src={image} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-lightGreen text-xl font-bold">{type}</span>
          <Link href={link} alt={title} className='hover:underline underline-offset-2'>
            <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
          </Link>
          <div className="mt-2 flex flex-row w-full justify-between">
          <Link href={link} alt={title} className="p-2 text-lg font-semibold underline">
              Visit
            </Link>
            <Link href={github} alt={title} className="w-10">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Grace Reed | Projects </title>
        <meta title="Projects" content="Projects Page" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text={"Look What I Can Do"} className="mb-16"/>
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
               featured project
            </div>
            <div className="col-span-6">
                project - 1
            </div>
            <div className="col-span-6">project - 2</div>
            <div className="col-span-12">Featured</div>
            <div className="col-span-6">project - 3</div>
            <div className="col-span-6">project - 4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
