import { useEffect, useRef, useState } from "react";
import kiosk from "../../assets/kiosk3.jpeg";
import burger from "../../assets/mahi.jpeg";
import pizza from "../../assets/masala.jpeg";
import fries from "../../assets/roman.jpeg";
import drink from "../../assets/snack.jpeg";

const logos = [burger, pizza, fries, drink];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        hero-section
        w-full
        max-w-[100vw]
        overflow-hidden
        bg-white
        px-5
        sm:px-6
        md:px-8
        lg:px-10
      "
    >
      <div className="hero-content mx-auto w-full max-w-7xl min-w-0 text-center">

        {/* Heading */}
        <h1
          className={`
            hero-title
            ${show ? "show" : ""}
            w-full
            max-w-full
            text-[48px]
            leading-[0.95]
            tracking-[-2px]
            sm:text-[62px]
            md:text-[80px]
            lg:text-[105px]
            xl:text-[120px]
            font-black
            mb-10
            sm:mb-12
            md:mb-14
            lg:mb-12
          `}
        >
          Tap<span style={{ color: "#441212" }}>. Order.</span> Go.
        </h1>

        {/* Kiosk Image */}
        <img
          src={kiosk}
          alt="Kiosk"
          className={`
            hero-image
            ${show ? "show" : ""}
            block
            mx-auto
            h-[300px]
            w-[200px]
            max-w-full
            object-cover
            sm:h-[350px]
            sm:w-[230px]
            md:h-[400px]
            md:w-[260px]
            lg:h-[450px]
            lg:w-[300px]
            xl:h-[550px]
            xl:w-[350px]
          `}
        />

        {/* Logo Marquee */}
        <section className="w-full py-10 sm:py-12 md:py-14 lg:py-16">
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-5xl
              overflow-hidden
              px-2
              sm:w-[90%]
              lg:w-[80%]
            "
          >
            {/* Left Fade */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-12
                bg-gradient-to-r
                from-white
                to-transparent
                sm:w-16
                lg:w-20
              "
            />

            {/* Right Fade */}
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                z-10
                h-full
                w-12
                bg-gradient-to-l
                from-white
                to-transparent
                sm:w-16
                lg:w-20
              "
            />

            {/* Marquee */}
            <div className="animate-marquee flex w-max gap-8 whitespace-nowrap sm:gap-12 md:gap-20 lg:gap-32">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="
                    flex
                    h-20
                    w-20
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-md
                    sm:h-22
                    sm:w-22
                    md:h-24
                    md:w-24
                  "
                >
                  <img
                    src={logo}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      rounded-xl
                    "
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