import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const ListIcon = ({ reference }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-lightBrown">
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-mediumBlue stroke-1 fill-none dark:stroke-lightBrown "
        />
        <motion.circle
        ref={ref}
          cx={75}
          cy={50}
          r={20}
          className="stroke-[3px] fill-mediumBlue dark:fill-dark"
          style={{pathLength: scrollYProgress}}
        />
        <circle cx={75} cy={50} r={10} className="stroke-1 fill-dark dark:fill-lightBrown" />
      </svg>
    </figure>
  );
};

export default ListIcon;
