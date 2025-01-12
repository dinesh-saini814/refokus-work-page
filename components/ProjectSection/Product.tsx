import Button from "../button/Button";

interface Item {
  color: string;
  title: string;
  tags: string[];
  url: string;
  description: string;
  live?: boolean;
  case?: boolean;
}

interface ProductProps {
  item: Item;
  mover: (count: number) => void;
  count: number;
}

const Product: React.FC<ProductProps> = ({ item, mover, count }) => {
  return (
    <div
      className="w-full my-3 sm:my-0 py-6 sm:mx-0 mx-1 sm:border-t-[1px] sm:border-opacity-50 sm:h-[18rem] px-4 sm:px-0 rounded-2xl sm:rounded-none"
      style={{
        backgroundColor: window.innerWidth <= 640 ? item.color : "transparent",
      }}
    >
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-lg mx-auto flex justify-between flex-col sm:flex-row"
      >
        <div className="flex md:flex-col justify-between mb-4">
          <h1 className="sm:text-2xl text-3xl capitalize font-medium mb-8">
            {item.title}
          </h1>
          <ul className="capitalize text-sm ">
            {item.tags.map((tag, i) => (
              <li key={i} className="">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {/* Video Section */}
        <div className="sm:flex-grow pb-4 sm:mt-0 block sm:hidden">
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            loop
            muted
            src={item.url}
          />
        </div>
        <div className="dets sm:w-1/3 w-full">
          <p className=" sm:mb-10 py-4 ">{item.description}</p>
          <div className="flex gap-5 items-center">
            {item.live && <Button text={"View Live"} />}
            <div className="hidden sm:block">
              {item.case && <Button text={"Case Study"} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
