import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import ListIcon from "./ListIcon";

export const Details = ({
  title,
  organization,
  companyLink,
  time,
  location,
  details,
  width
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className={`my-8 first:mt-0 last:mb-0 mx-auto w-[50%] flex flex-col items-center justify-between md:w-[80%]`}>
      <ListIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className={`${companyLink === null || companyLink == undefined ? "ml-[14em] lg:ml-[8em] text-nowrap xs:ml-6 xs:text-wrap": undefined}`}     >
        <h3 className={`capitalize font-bold text-2xl justify-start sm:text-lg xs:text-xl ${companyLink === null || companyLink === undefined ? "text-nowrap md:text-wrap" :"text-wrap"}`}>
          {title}&nbsp;
          {companyLink != null ? 
            <a
              href={companyLink}
              target="_blank"
              className=" dark:text-pink-500 text-lightGreen capitalize"
            >
              @{organization}
            </a>
          : 
            <></>
          }
        </h3>
        {companyLink === null || companyLink === undefined ? <>
<span className="font-medium capitalize text-dark/75 text-nowrap">
            {organization} <br/>
          </span>
        </>
         : 
          <></>
        }
        <span className="font-medium capitalize text-dark/75 xs:text-sm">
          {time} | {location}
        </span>
        <br />
        <span  className={`font-medium w-full md:text-sm ${companyLink === null || companyLink === undefined ? 'text-nowrap md:text-wrap' : 'text-wrap'}`}>
          {details.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </span>
      </motion.div>
    </li>
  );
};

export const AboutDetails = ({ sectionName, details }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl text-center w-full mb-32 dark:text-light md:text-6xl md:mb-16 xs:text-4xl">
        {sectionName}
      </h2>
      <div className={`mx-auto relative ${sectionName === "Education" ? "w-[75%]" : "w-75% lg:w-[90%]" }`}>
        <motion.div
          ref={ref}
          className="absolute left-9 top-o w-[4px] h-full bg-dark origin-top  dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 dark:text-light">
          {details}
        </ul>
      </div>
    </div>
  );
};
