/* eslint-disable react/jsx-key */
// /* eslint-disable react/jsx-key */
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 md:py-6 px-4 md:px-0 flex items-center gap-10 justify-between border-b-[1px] border-zinc-700">
      <div className="flex items-center nleft">
        <div className=" size-6 md:size-5">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.491027 5.74153C1.14573 5.12319 2.20721 5.1232 2.86191 5.74153L14.0384 16.2971C14.6931 16.9154 14.6931 17.9179 14.0384 18.5363C13.3837 19.1546 12.3222 19.1546 11.6675 18.5363L0.491027 7.9807C-0.163676 7.36237 -0.163676 6.35985 0.491027 5.74153Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.45464e-07 1.58333C1.45464e-07 0.708882 0.750582 0 1.67647 0H12.8529C13.7788 0 14.5294 0.708882 14.5294 1.58333C14.5294 2.45778 13.7788 3.16667 12.8529 3.16667H1.67647C0.750582 3.16667 1.45464e-07 2.45778 1.45464e-07 1.58333Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.35294 8.44444L3.35294 17.4167C3.35294 18.2911 2.60236 19 1.67647 19C0.750583 19 1.04529e-06 18.2911 1.00482e-06 17.4167L1.1658e-07 6.86111C9.71445e-08 6.44119 0.176628 6.03846 0.491027 5.74153C0.805426 5.44459 1.23184 5.27778 1.67647 5.27778L12.8529 5.27778C13.7788 5.27778 14.5294 5.98666 14.5294 6.86111C14.5294 7.73556 13.7788 8.44444 12.8529 8.44444L3.35294 8.44444Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="links ml-24 hidden md:block">
          <div className="flex  ml-24  gap-14 ">
            {["home", "work", "culture", "", "news"].map((link, index) =>
              index === 3 ? (
                <span className="w-[2px] h-7 bg-zinc-600"></span>
              ) : (
                <a href={`#`} className=" capitalize flex items-center gap-1">
                  {index === 1 && (
                    <span
                      style={{ boxShadow: "0 0 0.45em #00ff19" }}
                      className="w-1.5 h-1.5 bg-green-500 inline-block rounded-full"
                    ></span>
                  )}

                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <button className="border-[1px] rounded-full w-fit px-2 py-[2px] block md:hidden">
        Menu
      </button>
      <div className="hidden md:block">
        <Button text={"Start a Project"} />
      </div>
    </div>
  );
};

export default Navbar;
