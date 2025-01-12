/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import { FC } from "react";

interface MarqueProps {
  image: string[] | undefined;
}

const Marque: FC<MarqueProps> = ({ image }) => {
  return (
    <div className="flex w-full py-6 gap-20 whitespace-nowrap overflow-hidden">
      {/* Motion wrapper for marquee */}
      <motion.div
        className="flex gap-20"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 32, // Adjust speed of the animation
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Render images twice for seamless looping */}
        {image?.map((url, i) => (
          <img
            key={i}
            src={url}
            className="md:w-[6vw] flex-shrink-0"
            alt="marque"
          />
        ))}
        {image?.map((url, i) => (
          <img
            key={i}
            src={url}
            className="w-[6vw] flex-shrink-0"
            alt="marque"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;
