import Image from "next/image";

// /* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-10 px-5 flex gap-24">
        <div className="basis-1/2 ">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight hidden md:block">
            refokus.
          </h1>
          <div className="grid gap-4">
            <div className="flex gap-10 ">
              {["instagram", "twitter (x?)", "linkedin", "pintrest"].map(
                (item, index) => (
                  <a
                    key={index}
                    className="block mt-2 capitalize text-zinc-500"
                    href="#"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <Image
              width={150}
              height={50}
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              alt="policy"
              className="block md:hidden w-fit h-7"
            />
          </div>
        </div>
        <div className="basis-1/2 flex gap-32 ">
          <div className="basis-1/3 hidden md:block">
            <h4 className="mb-6 text-zinc-500">socials</h4>
            {["instagram", "twitter (x?)", "linkedin"].map((item, index) => (
              <a
                key={index}
                className="block mt-2 capitalize text-zinc-500"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/2 hidden md:block">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Image
              width={150}
              height={50}
              className="w-32 mt-4"
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
