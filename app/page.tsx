/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Cards from "@/components/Cards/Cards";
import Footer from "@/components/Footer/Footer";
import Marquees from "@/components/Marquee/Marquees";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Stripes from "@/components/Stripes/Stripes";
import Work from "@/components/workComponents/Work";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // scroll
  });

  return (
    <ReactLenis root>
      <main
        id="data-scroll-container"
        data-scroll-container
        className="w-full bg-black text-white"
      >
        <Work />
        <Stripes />
        <ProjectSection />
        <Marquees />
        <Cards />
        <Footer />
      </main>
    </ReactLenis>
  );
}
