import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactCards = [
  {
    icon: Mail,
    title: "Sales",
    value: "sales@tapgo.ch",
  },
  {
    icon: Mail,
    title: "Support",
    value: "support@tapgo.ch",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+41 76 263 80 62",
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Heading animation
      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        }
      )

        // Contact cards animation
        .fromTo(
          cardsRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.12,
          },
          "-=0.2"
        )

        // Form animation
        .fromTo(
          formRef.current,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-24
        md:py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#c2185b]/5
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-5xl">

        {/* ================= HEADING ================= */}

        <div
          ref={headingRef}
          className="mb-16 text-center"
        >
          <h2
           className="
            mb-8
            text-center
            text-3xl
            font-sans
            leading-bold
            tracking-tight
            text-gray-900
            sm:mb-10
            sm:text-4xl
            md:text-5xl
            lg:text-5xl
          "
          >
Get in Touch with Us          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-gray-500
              md:text-lg
            "
          >
            Have questions or need AI solutions? Let us know by filling out the form, and we’ll be in touch
          </p>
        </div>

        {/* ================= CONTACT CARDS ================= */}

        <div
          className="
            mx-auto
            mb-6
            grid
            max-w-3xl
            grid-cols-1
            gap-4
            md:grid-cols-3
          "
        >
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="
                  flex
                  h-28
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#F6F6F6]
                  px-6
                  py-4
                  transition-all
                  duration-300
                  hover:shadow-md
                "
              >
                {/* Icon + Text */}
                <div className="flex items-center justify-center gap-4">

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-sm
                    "
                  >
                    <Icon
                      size={22}
                      className="text-[#c2185b]"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4
                      className="
                        text-lg
                        font-medium
                        text-gray-800
                      "
                    >
                      {card.title}
                    </h4>

                    <p className="mt-1 text-xs md:text-sm text-gray-600">
  {card.value}
</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ================= CONTACT FORM ================= */}

        <div
          ref={formRef}
          className="
            mx-auto
            max-w-3xl
            rounded-3xl
            bg-[#F7F7F7]
            p-5
            shadow-sm
            md:p-8
          "
        >
          <form className="space-y-5">

            {/* ================= ROW 1 ================= */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* First Name */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[15px]
                    font-medium
                    text-gray-700
                  "
                >
                  First Name
                </label>

                <input
                  type="text"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-5
                    py-3
                    outline-none
                    transition-all
                    duration-300
                    hover:border-gray-400
                    focus:border-[#c2185b]
                    focus:ring-2
                    focus:ring-[#c2185b]/10
                  "
                />
              </div>

              {/* Surname */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    text-gray-600
                  "
                >
                  Surname
                </label>

                <input
                  type="text"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-5
                    py-3
                    outline-none
                    transition-all
                    duration-300
                    hover:border-gray-400
                    focus:border-[#c2185b]
                    focus:ring-2
                    focus:ring-[#c2185b]/10
                  "
                />
              </div>

            </div>

            {/* ================= ROW 2 ================= */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Email */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    text-gray-600
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-5
                    py-4
                    outline-none
                    transition-all
                    duration-300
                    hover:border-gray-400
                    focus:border-[#c2185b]
                    focus:ring-2
                    focus:ring-[#c2185b]/10
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    text-gray-600
                  "
                >
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="+41 76 123 45 67"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-5
                    py-4
                    outline-none
                    transition-all
                    duration-300
                    hover:border-gray-400
                    focus:border-[#c2185b]
                    focus:ring-2
                    focus:ring-[#c2185b]/10
                  "
                />
              </div>

            </div>

            {/* ================= MESSAGE ================= */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  text-gray-600
                "
              >
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-5
                  py-3
                  outline-none
                  transition-all
                  duration-300
                  hover:border-gray-400
                  focus:border-[#c2185b]
                  focus:ring-2
                  focus:ring-[#c2185b]/10
                "
              />
            </div>

            {/* ================= BUTTON ================= */}

            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-[#c2185b]
                py-3
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-gray-700
                hover:shadow-lg
              "
            >
              Submit Form
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}