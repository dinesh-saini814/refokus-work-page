import { HiArrowNarrowRight } from "react-icons/hi";

interface CardProps {
  width: string;
  start?: boolean;
  pera?: boolean;
}

const Card: React.FC<CardProps> = ({ width, start, pera }) => {
  return (
    <div
      className={` bg-zinc-800 p-5 mx-4 rounded-lg md:${width} w-full min-h-[30rem] flex-colum justify-between hover:bg-violet-700 hover:border-zinc-800 hover:shadow-lg hover:transition-all duration-300 hover:ease-in hover:delay-100 hover:transform cursor-pointer`}
    >
      <div className="w-full">
        <div className="w-full flex-b">
          <h3 className="uppercase">Get In Touch</h3>

          <HiArrowNarrowRight className="size-3" />
        </div>
        <h1 className="text-3xl font-medium mt-8">
          Lets get to it.
          <br />
          together.
        </h1>
      </div>
      <div className="down flex-b"></div>
      {start && (
        <div className="flex-b">
          <h1 className="text-7xl capitalize font-medium">Start a Project</h1>
          <div className=" hidden md:block">
            <div className="border-b-[1px] w-1/3 flex-b">
              <span className="py-2 text-lg ">Contact us</span>
              <HiArrowNarrowRight className="size-5 " />
            </div>
          </div>
        </div>
      )}
      {pera && (
        <div className=" flex-b ">
          <p className="w-1/2">
            News and Insights on Web Design, Webflow Development, and Creative
            Development.
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
