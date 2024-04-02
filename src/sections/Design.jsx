import React, { useEffect, useRef } from 'react';
import Heading from '../components/Heading';
import { gsap } from "gsap";
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Design({ isMobile }) {

  const subHeader = useRef(null);

  useEffect(() => {
    const subHeaderElem = subHeader.current;
    const splitType = new SplitType(subHeaderElem, { types: "chars,words", });
    let t1 = gsap.timeline();
    t1.from(splitType.chars, {
      scrollTrigger: {
        trigger: isMobile ? "#subText-4" : "#section-4",
        start: isMobile ? "top bottom-=50" : "top bottom-=600",
        end: isMobile ? "bottom-=50 center+=250" : "top center-=300px",
        scrub: 1,
      },
      autoAlpha: 0,
      scale: 0,
      stagger: 0.02,
      skewX: "45deg",
      transformOrigin: "bottom",
      ease: "ease.in",
      delay: 1
    });
  }, [isMobile]);

  return (
    <div className='flex flex-col justify-end items-center md:items-end w-screen h-screen p-2 md:p-12 -mt-20 md:mt-0' id='section-4'>
      <div>
        <Heading content={"Silhouette design"} style={"font-sansation text-[#282828] text-2xl md:text-3xl lg:text-5xl text-center sm:text-left"} scrolled={true} section={"section-4"} isMobile={isMobile} />
        <p className=' text-[#444444] text-sm md:text-2xl lg:text-4xl font-extralight text-center sm:text-left' ref={subHeader} id='subText-4'>
          The shape and contours of the camera body,<br />
          including any ergonomic grips or curves<br />
          designed for comfortable handling.
        </p>
      </div>
      <div className="h-40 sm:h-0"></div>
    </div>
  )
}
