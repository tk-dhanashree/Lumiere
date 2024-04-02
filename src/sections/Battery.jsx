import React from 'react'
import Heading from "../components/Heading";
import { gsap } from "gsap";
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Battery({isMobile}) {

  const subHeader = useRef(null);

  useEffect(() => {
    const subHeaderElem = subHeader.current;
    const splitType = new SplitType(subHeaderElem, { types: "chars,words", });
    let t1 = gsap.timeline();
    t1.from(splitType.chars, {
      scrollTrigger: {
        trigger: isMobile ? "#subText-3" : "#section-3",
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
    <div className='flex flex-col justify-end items-center md:items-start w-screen h-screen p-2 md:p-12 -mt-20 md:mt-0' id='section-3'>
      <Heading content={"Sustained battery life"} style={"font-sansation text-[#282828] text-2xl md:text-3xl lg:text-5xl text-center sm:text-left"} scrolled={true} section={"section-3"}/>
      <p className='text-[#444444] text-sm md:text-2xl lg:text-4xl font-extralight text-center sm:text-left' ref={subHeader} id='subText-3'>
        Enjoy extended shooting sessions without<br />
        interruption, thanks to long-lasting battery life,<br />
        ensuring you never miss a moment of action
      </p>
      <div className="h-40 sm:h-0"></div>
    </div>
  )
}
