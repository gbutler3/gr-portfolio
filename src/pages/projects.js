import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/styles/icons";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import communitySideKicks from "../../public/project_screen_shots/Community_Sidekicks.png";
import appTrack from "../../public/project_screen_shots/App_Track.PNG";
import quoteGenerator from "../../public/project_screen_shots/App_Track.PNG";
import budgetTracker from "../../public/project_screen_shots/budget_tracker_screenshot.PNG";
import ORMImage from "../../public/project_screen_shots/command _line_image.PNG";
import workoutProgress from "../../public/project_screen_shots/fitness_tracker_screenshot.PNG";
import dayPlanner from "../../public/project_screen_shots/Workday_scheduler_screenshot.png";
import noteTaker from "../../public/project_screen_shots/Note_Taker_screenshot.PNG";
import { motion, AnimatePresence, wrap } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const AbraProjectImages = [
  "/project_screen_shots/Abra/login.png",
  "/project_screen_shots/Abra/talentportal.png",
  "/project_screen_shots/Abra/main.png",
  "/project_screen_shots/Abra/main2.png",
  "/project_screen_shots/Abra/connections.png",
  "/project_screen_shots/Abra/opportunities.png",
  "/project_screen_shots/Abra/alerts.png",

  "/project_screen_shots/Abra/mobile-main.jpg",
  "/project_screen_shots/Abra/mobile-personalDetails1.jpg",
  "/project_screen_shots/Abra/mobile-personalDetails2.jpg",
  "/project_screen_shots/Abra/mobile-experience.jpg",
  "/project_screen_shots/Abra/mobile-experience1.jpg",
  "/project_screen_shots/Abra/mobile-experience2.jpg",
  "/project_screen_shots/Abra/mobile-experience3.jpg",
  "/project_screen_shots/Abra/mobile-experience4.jpg",
  "/project_screen_shots/Abra/mobile-certifications.jpg",
  "/project_screen_shots/Abra/mobile-certifications1.jpg",
  "/project_screen_shots/Abra/mobile-certifications2.jpg",
  "/project_screen_shots/Abra/mobile-preferences1.jpg",
  "/project_screen_shots/Abra/mobile-preferences2.jpg",
  "/project_screen_shots/Abra/mobile-availability.jpg",
  "/project_screen_shots/Abra/mobile-connections.jpg",
  "/project_screen_shots/Abra/mobile-chat.jpg",
  "/project_screen_shots/Abra/mobile-opportunities.jpg",
  "/project_screen_shots/Abra/mobile-oportunityDetails.jpg",
  "/project_screen_shots/Abra/mobile-alerts.jpg",
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const FeaturedProject = ({ title, summary, image, link, github }) => {
  const [mode, setMode] = useThemeSwitcher(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, AbraProjectImages.length, page);
  console.log("imageIndex: " + imageIndex)
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    console.log("pagniated :" + page + " " + newDirection);
  };

  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid bg-light shadow-2xl border-darkGreen p-12 dark:bg-dark dark:border-lightBlue
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-darkGreen rounded-br-3xl dark:bg-lightBlue
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <div className="relative w-1/2 overflow-hidden rounded-lg lg:w-full ">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            priority
            className={`h-full object-contain ${imageIndex > 6 ? "w-1/2 ml-[25%]": "w-full"}`}
            key={page}
            src={AbraProjectImages[imageIndex]}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer bg-dark text-light rounded-full opacity-75 hover:opacity-100"
          onClick={() => paginate(-1)}>
          {"<"}
        </div>
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer bg-dark text-light rounded-full opacity-75 hover:opacity-100"
          onClick={() => paginate(1)}>
          {">"}
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-o lg:pt-6">
        <Link
          href={link}
          alt={title}
          className="hover:underline underline-offset-2 text-lightGreen dark:text-mediumBlue sm:text-sm"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-lightGreen dark:text-mediumBlue">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {github == null || undefined ? null : (
            <Link href={github} alt={title} className="w-10" target="_">
              <GithubIcon className={"fill-dark"} />
            </Link>
          )}
          <Link
            href={link}
            alt={title}
            target="_"
            className={`${
              github == null || github == undefined ? "ml-0" : "ml-4"
            } rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border border-solid dark:border
                  hover:bg-light hover:text-dark hover:border-dark
                   dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:border dark:border-light dark:hover:text-dark
                   sm:px-4 sm:text-base`}
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark p-6 bg-light dark:bg-dark relative dark:border-lightBlue xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-darkGreen rounded-br-3xl dark:bg-lightBlue md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-lightGreen dark:text-mediumBlue text-xl font-bold lg:text-lg: md:text-base">
          {type}
        </span>
        <Link
          href={link}
          alt={title}
          target="_"
          className="hover:underline underline-offset-2  text-lightGreen dark:text-mediumBlue lg:text-2xl"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold  text-lightGreen dark:text-mediumBlue ">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex flex-row w-full justify-between md:text-base">
          <Link
            href={link}
            target="_"
            alt={title}
            className="p-2 text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} alt={title} className="w-10 md:w-8" target="_">
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
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Look What I Can Do"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Abra"}
                summary={
                  "A talent platform designed exclusively for the healthcare IT community. Abra transforms the way teams are formed and maintained, offering a more efficient utilization of the limited and highly skilled talent pool that leaders like you depend upon every day. Abra aggregates the most comprehensive sources of talent including independent contractors, consulting firm benches, and even shared capacity of other application teams. Conatins three web portals; Admin, Self-Service and Talent portal along with ios/android App. *Please note that admin and self-service portals are not shown. "
                }
                image={communitySideKicks}
                link={"https://login.abra.io/"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
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
            <div className="col-span-6 sm:col-span-12">
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
            <div className="col-span-6 sm:col-span-12">
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
            <div className="col-span-6 sm:col-span-12">
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
            <div className="col-span-6 sm:col-span-12">
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
            <div className="col-span-6 sm:col-span-12">
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
            <div className="col-span-6 sm:col-span-12">
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
            <div className="col-span-6 sm:col-span-12">
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
