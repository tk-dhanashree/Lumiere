import React from 'react'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Heading({ content, style, scrolled, section, isMobile }) {

    const header = useRef(null);

    const scrolledAnimation = (splitType, headerElem) => {
        let tl = gsap.timeline();
        if (isMobile) {
            tl.from(splitType.chars, {
                scrollTrigger: {
                    trigger: `#${section}`,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1,
                },
                yPercent: 100,
                scaleX: -1,
                stagger: 0.08
            })
        } else {
            tl.from(splitType.chars, {
                scrollTrigger: {
                    trigger: `#${section}`,
                    start: "top bottom-=500",
                    end: "top center-=300px",
                    scrub: 1,
                },
                yPercent: 100,
                scaleX: -1,
                stagger: 0.08
            })
        }
    }

    const loadedAnimation = (splitType, headerElem) => {
        let tl = gsap.timeline();
        tl.from(splitType.chars, {
            autoAlpha: 0,
            scale: 0,
            ease: "ease.out",
            duration: 2.5
        })
            .from(headerElem, {
                letterSpacing: "0.3em",
                filter: "blur(40px)",
                duration: 2.5
            }, "<");
    }

    useEffect(() => {
        const headerElem = header.current;
        const splitType = new SplitType(headerElem, { types: "chars,words" });
        console.log(splitType.chars)

        if (scrolled) {
            scrolledAnimation(splitType, headerElem);
        }
        else {
            loadedAnimation(splitType, headerElem);
        }
    }, [])

    return (
        <div className='overflow-hidden w-100%'>
            <div className={style} ref={header} >{content}</div>
        </div>
    )
}
