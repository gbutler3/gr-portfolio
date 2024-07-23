import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/styles/icons";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import communitySideKicks from "../../public/project_screen_shots/Community Sidekicks.png";
import appTrack from "../../public/project_screen_shots/App Track.PNG";
import quoteGenerator from "../../public/project_screen_shots/project 1 screenshot.PNG";
import budgetTracker from "../../public/project_screen_shots/budget tracker screenshot.PNG";
import ORMImage from "../../public/project_screen_shots/command line image.PNG";
import workoutProgress from "../../public/project_screen_shots/fitness tracker screenshot.PNG";
import dayPlanner from "../../public/project_screen_shots/Workday scheduler screenShot.png";
import noteTaker from "../../public/project_screen_shots/Note Taker screenshot.PNG";

const FeaturedProject = ({ title, summary, image, link, github }) => {
  const [mode, setMode] = useThemeSwitcher(0);

  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid bg-light shadow-2xl border-darkGreen p-12 dark:bg-dark dark:border-lightBlue">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-darkGreen rounded-br-3xl dark:bg-lightBlue" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={image} alt={title} className="w-full h-auto " />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <Link
          href={link}
          alt={title}
          className="hover:underline underline-offset-2 text-lightGreen dark:text-mediumBlue"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-lightGreen dark:text-mediumBlue">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} alt={title} className="w-10">
            <GithubIcon className={"fill-dark"} />
          </Link>
          <Link
            href={link}
            alt={title}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border border-solid dark:border
                  hover:bg-light hover:text-dark hover:border-dark
                   dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:border dark:border-light dark:hover:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark p-6 bg-light dark:bg-dark relative dark:border-lightBlue">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-darkGreen rounded-br-3xl dark:bg-lightBlue" />
      <div className="w-full overflow-hidden rounded-lg">
        <Image src={image} alt={title} className="w-full h-auto" />
      </div>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-lightGreen dark:text-mediumBlue text-xl font-bold">
          {type}
        </span>
        <Link
          href={link}
          alt={title}
          target="_"
          className="hover:underline underline-offset-2  text-lightGreen dark:text-mediumBlue"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold  text-lightGreen dark:text-mediumBlue ">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex flex-row w-full justify-between">
          <Link
            href={link}
            target="_"
            alt={title}
            className="p-2 text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} alt={title} className="w-10" target="_">
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
          <AnimatedText text={"Look What I Can Do"} className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-6">
              <Project
                title={"Community SideKicks"}
                summary={
                  "Community Sidekicks is a humanitarian website in which you can sign up to donate your time to a number of organizations in search of people willing to do volunteer work. Non-profit organizations can create an account and see a list of volunteers, and volunteers can sign up to be viewed and vetted by organizations."
                }
                image={communitySideKicks}
                link={
                  "https://community-sidekicks-gracereed-bb236762.koyeb.app/"
                }
                github={"https://github.com/gbutler3/community-sidekicks"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"App Track"}
                image={appTrack}
                summary={
                  "App Track makes job hunting easier. App Track allows job seekers to easily track their application status as they go through multiple application processes while applying to potential employers."
                }
                link={"https://powerful-reaches-64620.herokuapp.com/"}
                github={"https://github.com/gbutler3/app-track"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Day Planner"}
                summary={
                  "Calendar Application in which users are able to input events, which are then saved to local storage. Utilizes Mom,ent.js for the date and time."
                }
                image={dayPlanner}
                link={
                  "https://gbutler3.github.io/Work_Day-Schedule_Mini_Project/"
                }
                github={
                  "https://github.com/gbutler3/Work_Day-Schedule_Mini_Project"
                }
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Any Where Budget Tracker"}
                summary={
                  "Budget tracker which can be utilized on and offline to track expenses."
                }
                image={budgetTracker}
                link={"https://sleepy-mesa-04272.herokuapp.com/"}
                github={
                  "https://github.com/gbutler3/The-Anywhere-Budget-Tracker"
                }
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"ORM E Purchasing and Spending"}
                summary={
                  "Backend e-commerce site which is deployed through the command line."
                }
                image={ORMImage}
                link={""}
                github={
                  "https://github.com/gbutler3/ORM_E_Purchasing_and_Spending"
                }
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Workout Progress"}
                summary={
                  "Track and view your fitness progress over time. Users input the exercies, reps, and weight of each workout."
                }
                image={workoutProgress}
                link={"https://blooming-sands-23937.herokuapp.com/"}
                github={
                  "https://github.com/gbutler3/Workout_Progress_Tracker-NoSQL"
                }
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Quote Generator and Translator"}
                summary={
                  "Want to generate a quote? This application can do that for you, and even translate the quote into another language. Utilizex an API to generte the random quote and a second API is used to translate that quote into the user selected language."
                }
                image={quoteGenerator}
                link={"https://free-quotes-api.herokuapp.com/"}
                github={"https://github.com/gbutler3/quote_gen_translator"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Note Taker"}
                summary={
                  "Note Taker for any individual who has multiple tasks for meetins. Users are able to create, save and delete notes from this application."
                }
                image={noteTaker}
                link={"https://obscure-thicket-67236.herokuapp.com/"}
                github={"https://github.com/gbutler3/Meeting_Notes_Taker"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
