import { useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What exactly is TapGo?",
    answer:
      "TapGo is an all-in-one solution for restaurant digitalization. We offer self-service ordering kiosks, QR code ordering, mobile payment, and ultra-simple software, all with no installation fees or monthly subscriptions. You only pay a low cost per order, capped at CHF 99/month.",
  },
  {
    question: "Are there any material or installation fees?",
    answer:
      "No. The equipment (self-service kiosk, system, application) is provided free of charge by TapGo. No hidden fees, no rental, no surprise bills.",
  },
  {
    question: "How are you paid?",
    answer:
      "We charge CHF 0.50 per order, up to a maximum of CHF 99 per month. Whether you place 600 or 6,000 orders, you will never pay more than CHF 99 per month. It's simple, transparent, and fair.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "A minimum 36-month contract is required, after which you must give 3 months' notice if you wish to terminate your contract. The equipment will be collected at the end of the contract.",
  },
  {
    question: "Do you have customer service or support?",
    answer:
      "Yes. Our support is 100% digital (WhatsApp, email, chat) for maximum responsiveness. We assist you at every stage, from installation to daily management.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const headingRef = useRef(null);
  const faqRef = useRef([]);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         Section animation
      ========================= */

      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      /* =========================
         Heading animation
      ========================= */

      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* =========================
         FAQ cards animation
      ========================= */

      gsap.fromTo(
        faqRef.current,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
   <section
  ref={sectionRef}
  className="
    relative
    z-10
    w-full
    max-w-full
    overflow-hidden
    bg-white
    px-5
    py-10

    sm:px-6
    sm:py-12

    md:px-8
    md:py-14

    lg:px-10
    lg:py-16

    xl:py-20
  "
>
      {/* =========================
          Heading
      ========================= */}

      <div
        ref={headingRef}
        className="
          mx-auto
          w-full
          max-w-4xl
          text-center

          mb-10

          sm:mb-12

          md:mb-14

          lg:mb-16
        "
      >
        <h2
          className="
            text-3xl
            font-normal
            leading-[1.05]
            tracking-tight
            text-gray-900

            sm:text-4xl

            md:text-5xl

            lg:text-5xl

            xl:text-6xl
          "
        >
          <span className="hidden md:inline">
            We have the answers
            <br />
            you're looking for
          </span>

          <span className="md:hidden">
            We have the answers
            <br />
            you're looking for
          </span>
        </h2>

        <p
          className="
            mt-4
            text-base
            font-bold
            leading-relaxed
            text-gray-900

            sm:text-lg

            md:mt-5
            md:text-xl
            md:font-normal
          "
        >
          Quick answers to your questions
        </p>
      </div>

      {/* =========================
          FAQ LIST
      ========================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-3xl

          space-y-3

          sm:space-y-4
        "
      >
        {faqs.map((item, index) => {
          const isOpen = openItems.includes(index);

          return (
            <div
              ref={(el) => {
                faqRef.current[index] = el;
              }}
              key={index}
              className="
                group
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#E7E7E7]
                bg-white
                transition-shadow
                duration-300
                hover:shadow-lg
              "
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  px-4
                  py-4
                  text-left

                  sm:px-5
                  sm:py-5

                  md:px-6
                "
              >
                <span
                  className="
                    min-w-0
                    text-[14px]
                    font-normal
                    leading-relaxed
                    text-gray-700

                    sm:text-[15px]

                    md:text-[18px]
                  "
                >
                  {item.question}
                </span>

                <ChevronUp
                  size={20}
                  strokeWidth={2}
                  className={`
                    shrink-0
                    text-[#222]
                    transition-transform
                    duration-300

                    sm:h-[22px]
                    sm:w-[22px]

                    ${
                      isOpen
                        ? "rotate-0"
                        : "rotate-180"
                    }
                  `}
                />
              </button>

              {/* Answer */}
              <div
                className={`
                  grid
                  transition-all
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]

                  ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0 overflow-hidden">
                  <p
                    className="
                      px-5
                      pb-5
                      text-[13px]
                      leading-7
                      font-normal
                      text-[#d81b60]

                      sm:px-6
                      sm:pb-6
                      sm:text-[14px]
                      sm:leading-7

                      md:px-8
                      md:pb-7
                    "
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}