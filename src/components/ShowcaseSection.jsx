import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/firstvedio.mp4";

gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // TABLET + DESKTOP
      mm.add("(min-width: 768px)", () => {
        gsap.set(headingRef.current, {
          scale: 1.3,
          y: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1100",
            scrub: true,
            pin: false,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
  headingRef.current,
  {
    scale: 1,
    y: -70,
    ease: "none",
  },
  0
);

        tl.to(
          videoRef.current,
          {
            width: "100%",
            borderRadius: "0px",
            ease: "none",
          },
          0
        );

        tl.to(
          videoWrapperRef.current,
          {
            y: -120,
            ease: "none",
          },
          0
        );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      // MOBILE
      mm.add("(max-width: 767px)", () => {
        gsap.set(
          [
            headingRef.current,
            videoRef.current,
            videoWrapperRef.current,
          ],
          {
            clearProps: "all",
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
   <section
  ref={sectionRef}
  className="
    w-full
    max-w-[100vw]
    overflow-hidden
    bg-white

    min-h-0
    px-4
    pt-8
    pb-8

    sm:px-6
    sm:pt-10
    sm:pb-10

    md:min-h-[850px]
    md:px-8
    md:pt-20
    md:pb-8

    lg:min-h-[900px]
    lg:px-10
    lg:pt-24
    lg:pb-8

    xl:min-h-[950px]
  "
>
      {/* Mobile/Tablet/Desktop Content */}
      <div
  className="
    flex
    w-full
    max-w-full
    flex-col
    items-center
    justify-center

    md:sticky
    md:top-0
    md:h-screen
  "
>
        {/* Heading */}
        <div
          ref={headingRef}
          className="
            relative
            z-10
            flex
            w-full
            max-w-full
            justify-center
          "
        >
          <h1
            className="
              w-full
              text-center
              font-black
              uppercase
              leading-none
              tracking-tight
              text-[22vw]
              select-none

              sm:text-[20vw]

              md:text-[18vw]
              lg:text-[16vw]
              xl:text-[15vw]
            "
          >
            TAPGO
          </h1>
        </div>

        {/* Video */}
        <div
  ref={videoWrapperRef}
  className="
    relative
    z-20
    mt-5
    flex
    w-full
    max-w-full
    justify-center

    sm:mt-6

    md:-mt-16
    lg:-mt-20
  "
>
          <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
 className="
  block
  h-[260px]
  w-[40%]
  max-w-full
  rounded-[18px]
  object-cover
  shadow-2xl

  sm:h-[320px]
  sm:w-[60%]
  sm:rounded-3xl

  md:h-[420px]
  md:w-[60%]
  md:rounded-[35px]

  lg:h-[500px]

  xl:h-[550px]
"
>
  <source src={video} type="video/mp4" />
</video>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;