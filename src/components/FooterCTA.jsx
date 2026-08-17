import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
<section className="relative w-full overflow-hidden bg-gradient-to-b from-white 0% via-[#F3F3F3] 20% to-[#F3F3F3] 100% pt-0 pb-16 sm:pt-10 sm:pb-20 lg:pt-16">      <div className="absolute inset-0 -z-10">
        {/* Background blur if you have one */}
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Logo */}
        <h1 className="text-6xl font-black leading-none text-[#C2185B] sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[160px]">
          Tapgo
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-500 md:text-lg">
          Transform your restaurant with TapGo — No <br />
          equipment costs!
        </p>

        {/* Newsletter Heading */}
        <h2 className="mt-8 text-center font-['Satoshi'] text-[25px] font-medium leading-[1.5] tracking-[-0.02em] text-black">
          Join our newsletter
        </h2>

        {/* Email Form */}
        <div className="mt-5 flex h-[58px] w-full max-w-[400px] items-center overflow-hidden rounded-lg border border-[#2F2F2F] bg-[#3A3A3A]">
          <input
            type="email"
            placeholder="Your email"
            className="h-full flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-gray-400"
          />

          <button
            type="button"
            className="mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-[#C2185B] text-white transition hover:bg-[#a9154d]"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}