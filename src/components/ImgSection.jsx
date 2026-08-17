import React from "react";
import kiosk from "../assets/kiosk.avif";

function ImgSection() {
  return (
   <section
  className="
    relative
    w-full
    max-w-[100vw]
    overflow-hidden
    bg-white
    px-4
    pt-4
    pb-0

    sm:px-6
    sm:pt-5

    md:px-8
    md:pt-6

    lg:px-10
    lg:pt-8

    xl:pt-10
  "
>
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-6xl
          min-w-0
          justify-center
        "
      >
        {/* Image */}
        <img
          src={kiosk}
          alt="Kiosk"
          className="
            block
            h-auto
            w-56
            max-w-full
            object-contain

            sm:w-72
            md:w-96
            lg:w-[450px]
          "
        />

        {/* White Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-10
            h-28
            w-full
            bg-gradient-to-t
            from-white
            via-white/80
            to-transparent

            sm:h-32
            md:h-36
            lg:h-40
          "
        />

        {/* Heading */}
        <h1
          className="
            absolute
            bottom-12
            left-1/2
            z-20
            w-[calc(100%-2rem)]
            max-w-full
            -translate-x-1/2
            text-center
            text-2xl
            font-normal
            leading-tight
            text-gray-900

            sm:bottom-14
            sm:w-[calc(100%-3rem)]
            sm:text-3xl

            md:bottom-16
            md:text-4xl

            lg:bottom-20
            lg:w-auto
            lg:text-5xl
            lg:whitespace-nowrap
          "
        >
          Say bye to other kiosks
        </h1>
      </div>
    </section>
  );
}

export default ImgSection;