/* eslint-disable @next/next/no-img-element */
"use client";
import { useScroll } from "framer-motion";
import { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694ef851adea7c86198b690_Botify%20-%204%203.webp",
      top: "44%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d405786d15acd0e22a91_Kablamo%20-%204%203.webp",
      top: "60%",
      left: "51%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d6dab55cd38f78a07f92_Summon%20-%2016%209%20(A).webp",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp",
      top: "59%",
      left: "52%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr: number[]) {
      setImages((prev) =>
        prev.map((image, index) => {
          if (arr.includes(index)) {
            return { ...image, isActive: true };
          } else {
            return { ...image, isActive: false };
          }
        })
      );
    }

    switch (Math.floor(data * 100)) {
      case 1:
        imagesShow([]);
        break;
      case 3:
        imagesShow([0, 1]);
        break;
      case 4:
        imagesShow([0, 1, 2]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3]);
        break;
      case 7:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      default:
        break;
    }
  });

  // function isInViewport(scrollVal) {
  //   if (scrollVal >= 1 && scrollVal <= 20) {
  //     setImages(images.map((image, index) => {}));
  //   }
  // }

  return (
    <div className="w-full">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="md:text-[30vw] text-[42vw] py-12 md:py-0 leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="w-full h-full  absolute top-0">
          {images.map(
            (image, index) =>
              image.isActive && (
                <img
                  key={index}
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] transform-gpu"
                  src={image.url}
                  style={{ top: image.top, left: image.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
