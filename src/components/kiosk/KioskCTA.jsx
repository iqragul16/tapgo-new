import chefImage from "../../assets/cheif.avif";
import { Link } from "react-router-dom";
export default function KioskCTA() {
  return (
    <section className="w-full px-5 py-20">
        <div
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-[850px]
        flex-col
        overflow-visible
        rounded-[30px]
        bg-[#F1F1F1]
        px-6
        py-8
        sm:px-10
        lg:min-h-[400px]
        lg:flex-row
        lg:items-center
        lg:px-10
        lg:py-0
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[850px]
          flex-col
          overflow-visible
          rounded-[30px]
          bg-[#F1F1F1]
          px-6
          py-10
          sm:px-10
          lg:min-h-[440px]
          lg:flex-row
          lg:items-center
          lg:px-10
          lg:py-0
        "
      >
        {/* Mobile: Image FIRST */}
     <div
  className="
    relative
    order-1
    flex
    w-full
    justify-center
    overflow-visible
    lg:order-2
    lg:w-[52%]
    lg:items-end
    lg:justify-end
  "
>
  <img
    src={chefImage}
    alt="Chef"
   className="
  relative
  z-10
  -mt-20
  block
  h-auto
  w-[80%]
  max-w-[400px]
  object-contain
  lg:-mt-8
  lg:w-full
  lg:max-w-[500px]
"
  />

  {/* Bottom white glow */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-1/2
      z-20
      h-24
      w-[85%]
      -translate-x-1/2
      bg-gradient-to-t
      from-white
      via-white/90
      to-transparent
      blur-md
    "
  />
</div>

        {/* Mobile: Text SECOND */}
       <div
  className="
    order-2
    relative
    z-10
    w-full
    pt-6
    text-center
    lg:order-1
    lg:w-[48%]
    lg:pt-0
    lg:text-left
  "
>
       <h2
  className="
    font-sans
    text-2xl
    font-normal
    leading-[1.05]
    tracking-tight
    sm:text-3xl
    lg:text-5xl
  "
>
  Start Serving
  <br />
  <span className="whitespace-nowrap">
    Smarter With Zero
  </span>
  <br />
  Setup Cost
</h2>

          <p className="mt-5 max-w-[560px] font-sans text-sm font-normal leading-6 text-neutral-700">
  Launch your self-ordering kiosk with TapGo today. No coding, no hardware
  fees. Just faster service, happier customers, and a fully automated dining
  experience.
</p>

         <Link
  to="/contact"
  className="
    group
    relative
    mt-6
    inline-flex
    h-12
    overflow-hidden
    rounded-md
    bg-[#C9184A]
    px-4
    text-sm
    font-medium
    text-white
    shadow-[0_8px_15px_rgba(0,0,0,0.18)]
    transition
    hover:bg-[#ad123f]
  "
>
  <span
    className="
      flex
      h-full
      items-center
      gap-2
      transition-transform
      duration-300
      group-hover:-translate-y-12
    "
  >
    Contact Us
    <span>↗</span>
  </span>

  <span
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      gap-2
      translate-y-12
      transition-transform
      duration-300
      group-hover:translate-y-0
    "
  >
    Contact Us
    <span>↗</span>
  </span>
</Link>
 
        </div>
      </div>
      </div>
    </section>
  );
}