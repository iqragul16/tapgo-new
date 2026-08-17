
import { useEffect, useRef, useState } from "react";
import kiosk from "../../assets/kiosk3.jpeg";
import burger from "../../assets/mahi.jpeg";
import pizza from "../../assets/masala.jpeg";
import fries from "../../assets/roman.jpeg";
import drink from "../../assets/snack.jpeg";

const logos = [burger, pizza, fries, drink];

// import "./NextSection.css";

function NextSection() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
// const logos = [burger, pizza, fries, drink];
  return (
    <section
      ref={sectionRef}
      className="hero-section bg-white flex justify-center px-5 lg:px-10"
    >
      <div className="hero-content w-full max-w-7xl text-center">
        <h1
          className={`hero-title ${show ? "show" : ""}
            text-[52px]
            sm:text-[70px]
            md:text-[90px]
            lg:text-[110px]
            xl:text-[120px]
            font-black
            leading-none
            tracking-[-2px]
            mb-15
            lg:mb-12  `}
        >
          Tap. Order. Go.
        </h1>

        <img
          src={kiosk}
          alt="Kiosk"
          className={`hero-image ${show ? "show" : ""}
            block
            mx-auto
           w-[220px]
sm:w-[100px]
md:w-[50px]
lg:w-[300px]
xl:w-[350px]
md:h-[350px]
lg:h-[400px]
xl:h-[550px]
            h-[350px] `}
        />
     <section className="py-12">
  <div className="mx-auto w-[85%] lg:w-[70%] overflow-hidden relative">

    {/* Left Fade */}
    <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>

    {/* Right Fade */}
    <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent"></div>

    <div className="flex animate-marquee whitespace-nowrap gap-40">
      {[...logos, ...logos].map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 h-24 w-24 rounded-2xl bg-white shadow-md flex items-center justify-center"
        >
          <img
            src={logo}
            alt=""
            className="h-20 w-100 object-cover rounded-xl"
          />
        </div>
      ))}
    </div>

  </div>
</section>
      </div>
    </section>
  );
}

export default NextSection;