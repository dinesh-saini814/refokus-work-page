/* eslint-disable @next/next/no-img-element */
const Stripe = ({ val }) => {
  return (
    <div className="w-[100%] px-5 py-3 border-b-[1px] border-t-[1px] border-r-[1px] border-zinc-600 flex-b">
      <img className="h-6" src={val.url} alt="" />
      <span className="font-semibold text-xs">{val.no}</span>
    </div>
  );
};

export default Stripe;
