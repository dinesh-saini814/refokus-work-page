import Product from "./Product";
import Data from "./Data";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = Data.Projects;

const ProjectSection = () => {
  const [position, setPosition] = useState(0);

  const handleScroll = (val: number) => {
    setPosition(val * 18);
  };

  return (
    <div className=" mt-40  border-b-[1px] border-opacity-50 relative">
      {projects.map((item, index) => (
        <Product key={index} item={item} mover={handleScroll} count={index} />
      ))}
      <div className="w-full h-full  absolute top-0 pointer-events-none hidden sm:block">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem`, x: "-50%" }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
          className="window absolute w-[24rem] h-[18rem] bg-zinc-800 left-[45%]  overflow-hidden rounded-lg "
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-zinc-800 left-[45%] "
          >
            <video
              className="w-full h-full  object-cover"
              autoPlay
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-zinc-800 left-[45%]  "
          >
            <video
              className="w-full h-full  object-cover"
              autoPlay
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/bcgp-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-zinc-800 left-[45%]  "
          >
            <video
              className="w-full h-full  object-cover"
              autoPlay
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-zinc-800 left-[45%]  "
          >
            <video
              className="w-full h-full  object-cover"
              autoPlay
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/sevdesk-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-zinc-800 left-[45%]  "
          >
            <video
              className="w-full h-full  object-cover"
              autoPlay
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;
