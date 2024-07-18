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
  const containerStyle = {
    minWidth: '70ch',
    marginLeft: companyLink === null || companyLink == undefined ? '14em' : undefined,
  };

  return (
    <li
      ref={ref}
      className={`my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between`} style={{width: "50%"}}>
      <ListIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        style={containerStyle}      >
        <h3 className="capitalize font-bold text-2xl justify-center ">
          {title}&nbsp;
          {companyLink != null ? 
            <a
              href={companyLink}
              target="_blank"
              className="text-mediumBlue capitalize"
            >
              {/*  className="text-mediumBlue capitalize bg-dark/95 rounded-full pb-1 px-2 font-normal" // TODO: for dark mode */}
              @{organization}
            </a>
          : 
            <></>
          }
        </h3>
        {companyLink === null || companyLink === undefined ? <>
<span className="font-medium capitalize text-dark/75">
            {organization} <br/>
          </span>
        </>
         : 
          <></>
        }
        <span className="font-medium capitalize text-dark/75">
          {time} | {location}
        </span>
        <br />
        <span  className="font-medium w-full">
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
    <div className="my-32">
      <h2 className="font-bold text-8xl text-center w-full mb-32 dark:text-light">
        {sectionName}
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          ref={ref}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top  dark:bg-light"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between  dark:text-light">
          {details}
        </ul>
      </div>
    </div>
  );
};
