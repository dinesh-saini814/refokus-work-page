import { HiArrowNarrowRight } from "react-icons/hi";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="min-w-40 max-w-48 px-3 py-2 bg-zinc-100 text-black rounded-full  flex-b ">
      <span className="text-sm font-medium">{text}</span>
      <HiArrowNarrowRight className="size-3" />
    </button>
  );
};

export default Button;
