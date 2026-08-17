import { FaStar } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Cafe Bloom",
    review:(<>
      "TapGo completely transformed how we operate.<br/>
       Our wait times dropped by half, 
      and customers
       <br/>love the freedom to order at their own pace.",</>)
  },
  {
    id: 2,
    name: "Michael Lee",
    company: "Fresh Bites",
    review:(<>
      "he interface is so intuitive, even first-time <br/>
      customers navigate it easily .It’s helped <br/>
      us reduce staff pressure during peak hours.", </>)
  },
  {
    id: 3,
    name: "Emma Wilson",
    company: "Coffee House",
    review:(
      <>
      "We saved thousands on hardware costs 
      <br/>and launched in under two weeks.
       <br/>TapGo handled everything it was incredibly smooth",
       </>)
  },
  {
    id: 4,
    name: "David Smith",
    company: "Urban Kitchen",
    review:( <>
      "Since switching to TapGo, our average order value <br/>
      has gone up. Customers are more likely to add extras <br/>
       when ordering through the kiosk.",</>)
  },
];

function TestimonialSection() {
  const sliderRef1 = useRef(null);
const sliderRef2 = useRef(null);

useEffect(() => {
  gsap.to(sliderRef1.current, {
    xPercent: -50,
    duration: 25,
    ease: "none",
    repeat: -1,
  });

  gsap.fromTo(
    sliderRef2.current,
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
}, []);
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

        

         <h2
  className="
    mt-4
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-5xl
    text-gray-900
    font-normal
    leading-normal
  "
>
  Loved by our partners
</h2>

          <p className="mt-6 text-[#111111] text-lg leading-normaol">
           See how TapGo is transforming restaurants with speed, simplicity, and smart <br/>service.</p>

        </div>

        {/* Cards */}
<div className="mt-20 space-y-8">

  {/* First Row */}
  <div className="relative overflow-hidden">

    {/* Left Fade */}
    <div className="absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent pointer-events-none" />

    {/* Right Fade */}
    <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent pointer-events-none" />

    <div ref={sliderRef1} className="flex gap-8 w-max">
      {[...testimonials, ...testimonials].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[32px] border border-gray-200 p-8  min-w-[380px]"
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
          <div className="mt-8">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="mt-1 text-gray-500">{item.company}</p>
          </div>

          {/* Review */}
          <p className="mt-8 text-gray-700 leading-8">
            {item.review}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Second Row */}
  <div className="relative overflow-hidden">

    {/* Left Fade */}
    <div className="absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent pointer-events-none" />

    {/* Right Fade */}
    <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent pointer-events-none" />

    <div ref={sliderRef2} className="flex gap-8 w-max">
      {[...testimonials, ...testimonials].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[32px] border border-gray-200 p-8  min-w-[380px]"
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
          <div className="mt-8">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="mt-1 text-gray-500">{item.company}</p>
          </div>

          {/* Review */}
          <p className="mt-8 text-gray-700 leading-8">
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