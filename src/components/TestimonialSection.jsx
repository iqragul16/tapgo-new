import { FaStar } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Cafe Bloom",
    review: (
      <>
        "TapGo completely transformed how we operate.
        <br className="hidden sm:block" />
        Our wait times dropped by half, and customers
        <br className="hidden sm:block" />
        love the freedom to order at their own pace."
      </>
    ),
  },
  {
    id: 2,
    name: "Michael Lee",
    company: "Fresh Bites",
    review: (
      <>
        "The interface is so intuitive, even first-time
        <br className="hidden sm:block" />
        customers navigate it easily. It’s helped
        <br className="hidden sm:block" />
        us reduce staff pressure during peak hours."
      </>
    ),
  },
  {
    id: 3,
    name: "Emma Wilson",
    company: "Coffee House",
    review: (
      <>
        "We saved thousands on hardware costs
        <br className="hidden sm:block" />
        and launched in under two weeks.
        <br className="hidden sm:block" />
        TapGo handled everything; it was incredibly smooth."
      </>
    ),
  },
  {
    id: 4,
    name: "David Smith",
    company: "Urban Kitchen",
    review: (
      <>
        "Since switching to TapGo, our average order value
        <br className="hidden sm:block" />
        has gone up. Customers are more likely to add extras
        <br className="hidden sm:block" />
        when ordering through the kiosk."
      </>
    ),
  },
];

function TestimonialSection() {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const firstSlider = sliderRef1.current;
      const secondSlider = sliderRef2.current;

      if (!firstSlider || !secondSlider) return;

      const animation1 = gsap.to(firstSlider, {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      const animation2 = gsap.fromTo(
        secondSlider,
        {
          xPercent: -50,
        },
        {
          xPercent: 0,
          duration: 25,
          ease: "none",
          repeat: -1,
        }
      );

      return () => {
        animation1.kill();
        animation2.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
        w-full
        max-w-[100vw]
        overflow-hidden
        bg-white
        py-12
        sm:py-14
        md:py-16
        lg:py-20
        xl:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* Heading */}
        <div
          className="
            mx-auto
            w-full
            max-w-3xl
            text-center
          "
        >
          <h2
            className="
              mt-0
              text-3xl
              font-normal
              leading-tight
              text-gray-900

              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            Loved by our partners
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-[#111111]

              sm:mt-5
              sm:text-base
              sm:leading-7

              md:text-lg
              md:leading-8
            "
          >
            See how TapGo is transforming restaurants with speed,
            simplicity, and smart service.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-10
            space-y-5

            sm:mt-12
            sm:space-y-6

            md:mt-14
            md:space-y-8

            lg:mt-16
          "
        >
          {/* First Row */}
          <div className="relative w-full overflow-hidden">
            {/* Left Fade */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-10
                bg-gradient-to-r
                from-white
                to-transparent

                sm:w-16
                md:w-24
                lg:w-32
                xl:w-40
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
                w-10
                bg-gradient-to-l
                from-white
                to-transparent

                sm:w-16
                md:w-24
                lg:w-32
                xl:w-40
              "
            />

            <div
              ref={sliderRef1}
              className="
                flex
                w-max
                gap-4

                sm:gap-5
                md:gap-6
                lg:gap-8
              "
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="
                    w-[calc(100vw-40px)]
                    min-w-[calc(100vw-40px)]
                    max-w-[420px]
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-5

                    sm:w-[350px]
                    sm:min-w-[350px]
                    sm:p-6

                    md:w-[380px]
                    md:min-w-[380px]
                    md:p-7

                    lg:w-[400px]
                    lg:min-w-[400px]
                    lg:p-8
                  "
                >
                  {/* Stars */}
                  <div className="flex gap-1 text-pink-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  {/* User */}
                  <div className="mt-6 sm:mt-7 md:mt-8">
                    <h3 className="text-lg font-bold sm:text-xl">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                      {item.company}
                    </p>
                  </div>

                  {/* Review */}
                  <p
                    className="
                      mt-6
                      text-sm
                      leading-7
                      text-gray-700

                      sm:mt-7
                      sm:text-base

                      md:mt-8
                      md:leading-8
                    "
                  >
                    {item.review}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="relative w-full overflow-hidden">
            {/* Left Fade */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-10
                bg-gradient-to-r
                from-white
                to-transparent

                sm:w-16
                md:w-24
                lg:w-32
                xl:w-40
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
                w-10
                bg-gradient-to-l
                from-white
                to-transparent

                sm:w-16
                md:w-24
                lg:w-32
                xl:w-40
              "
            />

            <div
              ref={sliderRef2}
              className="
                flex
                w-max
                gap-4

                sm:gap-5
                md:gap-6
                lg:gap-8
              "
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="
                    w-[calc(100vw-40px)]
                    min-w-[calc(100vw-40px)]
                    max-w-[420px]
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-5

                    sm:w-[350px]
                    sm:min-w-[350px]
                    sm:p-6

                    md:w-[380px]
                    md:min-w-[380px]
                    md:p-7

                    lg:w-[400px]
                    lg:min-w-[400px]
                    lg:p-8
                  "
                >
                  {/* Stars */}
                  <div className="flex gap-1 text-pink-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  {/* User */}
                  <div className="mt-6 sm:mt-7 md:mt-8">
                    <h3 className="text-lg font-bold sm:text-xl">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                      {item.company}
                    </p>
                  </div>

                  {/* Review */}
                  <p
                    className="
                      mt-6
                      text-sm
                      leading-7
                      text-gray-700

                      sm:mt-7
                      sm:text-base

                      md:mt-8
                      md:leading-8
                    "
                  >
                    {item.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;