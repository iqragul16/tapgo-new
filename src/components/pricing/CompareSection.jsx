import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function CompareSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 60,
      });

      gsap.set(cardRef.current, {
        opacity: 0,
        x: 120,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }).to(
        cardRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    "Hardware Required",
    "Setup Cost",
    "Monthly Maintenance",
    "QR Ordering",
    "Self-Service Ordering",
    "Analytics Dashboard",
    "24/7 Support",
  ];

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-5 lg:px-10 py-24"
    >
      <h2
  ref={headingRef}
  className="text-xl md:text-6xl font-bold text-center mb-10 tracking-tight"
>
  Other vs. TapGo
</h2>
<div className="flex flex-row max-[799px]:flex-col justify-center items-stretch gap-8 ">
          <div className="w-full max-w-[460px] rounded-2xl  bg-white p-8">
  <p className="text-sm md:text-base leading-relaxed text-gray-700">
    Other tools
  </p>

  <div className="space-y-5">
    <div className="flex items-start gap-3">
      <X className="text-red-500 mt-1 shrink-0" size={16} />
     <p className="text-sm md:text-base leading-relaxed text-gray-700">
        CHF 5,000–8,000+ for the basic hardware configuration
      </p>
    </div>

    <div className="flex items-start gap-3">
      <X className="text-red-500 mt-1 shrink-0" size={16} />
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        CHF 100–300/month + hidden fees
      </p>
    </div>

    <div className="flex items-start gap-3">
      <X className="text-red-500 mt-1 shrink-0" size={16} />
     <p className="text-sm md:text-base leading-relaxed text-gray-700">
        Same price regardless of sales volume
      </p>
    </div>

    <div className="flex items-start gap-3">
      <X className="text-red-500 mt-1 shrink-0" size={16} />
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        Do-it-yourself installation or expensive technical support
      </p>
    </div>

    <div className="flex items-start gap-3">
      <X className="text-red-500 mt-1 shrink-0" size={16} />
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        Confusing levels, installation fees, licensing costs
      </p>
    </div>
  </div>
</div>
{/* Right Side */}
<div
  ref={cardRef}
  className="w-full max-w-[460px] bg-[#f6f6f6] rounded-2xl border border-pink-300 shadow-lg p-8"
>
  <p className="text-sm md:text-base leading-relaxed text-gray-700">
    TapGo
  </p>

  <div className="space-y-5">

    <div className="flex items-start gap-3">
      <Check className="text-green-500 mt-1 shrink-0" size={16} />
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        CHF 0 — Free equipment worth CHF 8,000+
      </p>
    </div>

    <div className="flex items-start gap-3">
      <Check className="text-green-500 mt-1 shrink-0" size={16} />
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        No subscription — Pay only per order
      </p>
    </div>

    <div className="flex items-start gap-3">
      <Check className="text-green-500 mt-1 shrink-0" size={16} />
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        CHF 0.50/order — Capped at CHF 99/month
      </p>
    </div>

    <div className="flex items-start gap-3">
      <Check className="text-green-500 mt-1 shrink-0" size={16} />
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        Fully managed — No coding required, available in 2 weeks
      </p>
    </div>

    <div className="flex items-start gap-3">
      <Check className="text-green-500 mt-1 shrink-0" size={16} />
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        Simple, flat-rate pricing with no surprises
      </p>
    </div>

  </div>
</div>

  </div>


            

    </section>
  );
}

export default CompareSection;