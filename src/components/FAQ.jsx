import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { useEffect, useRef } from "react";
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
  const [openItems, setOpenItems] = useState([0]);
  const headingRef = useRef(null);
const faqRef = useRef([]);
const sectionRef = useRef(null);
  const toggleFAQ = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };
  
useEffect(() => {
  const ctx = gsap.context(() => {
gsap.fromTo(
  sectionRef.current,
  {
    opacity: 0,
    y: 80,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 95%",
      end: "top 70%",
      scrub: true,
    },
  }
);
    // Heading Animation
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 1.5,
        ease: "power4.out",
      }
    );

    // FAQ Animation (All Cards Together)
    gsap.fromTo(
      faqRef.current,
      {
        opacity: 0,
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: faqRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

  });

  return () => ctx.revert();
}, []);
  return (
<section
  ref={sectionRef}
  className="relative -mt-64 bg-white py-24 md:py-32 overflow-hidden z-10"
>
          <div className="max-w-4xl mx-auto">
        {/* Heading */}

        <div  ref={headingRef}  className="text-center mb-20">

<h2
  className="
    hidden md:block
    mt-4
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-5xl
    text-gray-900
    font-normal
leading-[0.95]  "
>
  We have the answers
  <br />
  you're looking for
</h2>

  <p
  className="
    mt-6
    text-gray-900
    text-xl
    font-bold
    md:text-xl
    md:font-normal
  "
>
  Quick answers to your questions
</p>

</div>

          
        </div>

        {/* FAQ */}

<div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                ref={(el) => (faqRef.current[index] = el)}
  key={index}
                className="
group
rounded-2xl
border
border-[#E7E7E7]
bg-white
overflow-hidden
transition-all
duration-300
hover:shadow-xl

"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
w-full
flex
justify-between
items-center
px-4
md:px-5
py-4
text-left
"
                >
                  <span className="
text-[14px]
md:text-[18px]
font-normal
  text-gray-700
transition-colors
duration-300

">
                    {item.question}
                  </span>

                 <ChevronUp
size={22}
strokeWidth={2}
className={`
transition-all
duration-300
text-[#222]
${isOpen ? "rotate-0" : "rotate-180"}
`}
/>
                </button>

                <div
                  className={`grid transition-all duration-700
ease-[cubic-bezier(.22,1,.36,1)] ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="
px-6
md:px-8
pb-8
text-[14px]
md:text-[14px]
leading-9
font-normal
text-[#d81b60]
">
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