import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const data = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg",
      no: 42,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",
      no: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg",
      no: 11,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg",
      no: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg",
      no: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",
      no: 11,
    },
  ];
  return (
    <>
      <div className="mt-10 hidden md:block">
        <div className="flex items-center ">
          {data.map((item, index) => (
            <Stripe key={index} val={item} />
          ))}
        </div>
      </div>
      <div className="w-[90vw] border block md:hidden mt-6 mx-auto"></div>
    </>
  );
};

export default Stripes;
