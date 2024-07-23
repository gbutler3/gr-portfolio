import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-lightGreen border border-solid border-darkGreen text-light py-3 px-6 shadow-dark cursor-pointer absolute
       dark:border-mediumBlue dark:bg-mediumBlue dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{x: 0, y: 0}}
      whileInView={{x: x, y: y}}
      transition={{duration: 1,}}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center  dark:text-light">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-lightGreen border border-solid border-lightGreen text-light p-8 shadow-dark cursor-pointer
            dark:border-mediumBlue dark:bg-mediumBlue dark:text-dark" 
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name={"CSS"} x={"-20vw"} y={"-10vw"}/>
        <Skill name={"HTML"} x={"-34vw"} y={"-15vw"}/>
        <Skill name={"JavaScript"} x={"-5vw"} y={"-18vw"}/>
        <Skill name={"MaterialUI"} x={"0"} y={"-9vw"}/>
        <Skill name={"ReactJS"} x={"-16vw"} y={"8vw"}/>
        <Skill name={"TailWindCSS"} x={"-32vw"} y={"1vw"}/>
        <Skill name={"Vite"} x={"-30vw"} y={"17vw"}/>
        <Skill name={"NextJS"} x={"20vw"} y={"2vw"}/>
        <Skill name={"Git"} x={"-8vw"} y={"21vw"}/>
        <Skill name={"GitHub"} x={"8vw"} y={"15vw"}/>
        <Skill name={"AzureDevops"} x={"32vw"} y={"-3vw"}/>
        <Skill name={"Figma"} x={"26vw"} y={"15vw"}/>
        <Skill name={"Canva"} x={"26vw"} y={"15vw"}/>
        <Skill name={"Web Design"} x={"13vw"} y={"-20vw"}/>
      </div>
    </>
  );
};

export default Skills;
