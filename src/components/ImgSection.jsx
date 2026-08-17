import React from "react";
import kiosk from "../assets/kiosk.avif"; // apna image path

function ImgSection() {
  return (
<section className="bg-white flex flex-col items-center pt-0 pb-0">
      <div className="relative flex justify-center">

  {/* Image */}
  <img
    src={kiosk}
    alt="Kiosk"
    className="w-56 sm:w-72 md:w-96 lg:w-[450px] object-contain"
  />

  {/* White Gradient */}
  <div
    className="
      absolute
      bottom-0
      left-0
      w-full
      h-40
      bg-gradient-to-t
      from-white
      via-white/80
      to-transparent
      pointer-events-none
    "
  ></div>

  {/* Heading */}
  <h1
    className="
  absolute
  bottom-20
  left-1/2
  -translate-x-1/2
  whitespace-nowrap
  mt-4
  text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-5xl
  text-gray-900
  font-normal
  leading-normal
  z-10
"
  >
    Say bye to other kiosks
  </h1>

</div>
</section>
  );
}

export default ImgSection;