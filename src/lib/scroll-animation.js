import gsap from "gsap";

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
    let tl = gsap.timeline();
    tl.to(position, {
        scrollTrigger: {
            trigger: "#section-2",
            start: "start bottom",
            end: "start start",
            scrub: true,
            immediateRender: false
        },
        x: !isMobile ? 3.04 : 7.0995756277,
        y: !isMobile ? 0.15 : 0.7169995714,
        z: !isMobile ? 7.6668063154 : 18.3197241454,
        onUpdate
    })
    .to(target, {
        scrollTrigger: {
            trigger: "#section-2",
            start: "start bottom",
            end: "start start",
            scrub: true,
            immediateRender: false
        },
        x: !isMobile ? 1.7 : 1.8507297531,
        y: !isMobile ? 0.0695044878 : 0.0564751981,
        z: !isMobile ? -0.6532607519 : 4.9708727335,
        onUpdate
    })
    .to(position, {
        scrollTrigger: {
            trigger: "#section-3",
            start: "start bottom",
            end: "start start",
            scrub: true,
            immediateRender: false
        },
        x: !isMobile ? 7.5191759796 : 17.3546986512,
        y: !isMobile ? 0.1844398663 : -0.7435252169,
        z: !isMobile ? 0.3752143055 : -0.2773141713,
        onUpdate
    })
    .to(target, {
        scrollTrigger: {
            trigger: "#section-3",
            start: "start bottom",
            end: "start start",
            scrub: true,
            immediateRender: false
        },
        x: !isMobile ? 0.1791610278 : 0,
        y: !isMobile ? 0.0604179663 : 0,
        z: !isMobile ? 1.2044043883 : 0,
        onUpdate
    })
    .to(position, {
        scrollTrigger: {
            trigger: "#section-4",
            start: "start bottom",
            end: "start start",
            scrub: true,
            immediateRender: false
        },
        x: !isMobile ? 0.0072519564 : 1.4358740796,
        y: !isMobile ? 9.2246920512 : 17.8154012069,
        z: !isMobile ? -2.0042634964 : 0.0070194543,
        onUpdate
    })
    .to(target, {
        scrollTrigger: {
            trigger: "#section-4",
            start: "start bottom",
            end: "start start",
            scrub: true,
            immediateRender: false
        },
        x: !isMobile ? -0.162045707 : 0,
        y: !isMobile ? 0.5207615103 : 0,
        z: !isMobile ? -2.0028087921 : 0,
        onUpdate
    })
    .to(position, {
        scrollTrigger: {
            trigger: "#section-5",
            start: "start bottom",
            end: "center bottom",
            scrub: true,
            immediateRender: false
        },
        x: !isMobile ? -0.2847745692 : -0.2847745692,
        y: !isMobile ? 9.2279286568 : 9.2279286568,
        z: !isMobile ? -6.7713157681 : -6.7713157681,
        opacity: 0,
        onUpdate
    })
    .to(target, {
        scrollTrigger: {
            trigger: "#section-5",
            start: "start bottom",
            end: "center bottom",
            scrub: true,
            immediateRender: false
        },
        x: !isMobile ? -0.2847727031 : -0.2847727031,
        y: !isMobile ? 0.5223516698 : 0.5223516698,
        z: !isMobile ? -6.7713072649 : -6.7713072649,
        onUpdate
    })
}