import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const ListIcon = ({ reference }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 dark:stroke-pink-700 stroke-lightGreen">
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="dark:stroke-pink-700 stroke-1 fill-none stroke-lightGreen "
        />
        <motion.circle
        ref={ref}
          cx={75}
          cy={50}
          r={20}
          className="stroke-[5px] dark:fill-pink-300 fill-light"
          style={{pathLength: scrollYProgress}}
        />
        <circle cx={75} cy={50} r={10} className="stroke-1 dark:fill-dark fill-darkGreen" />
      </svg>
    </figure>
  );
};

export default ListIcon;
