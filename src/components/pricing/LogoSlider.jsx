import burger from "../../assets/mahi.jpeg";
import pizza from "../../assets/masala.jpeg";
import fries from "../../assets/roman.jpeg";
import drink from "../../assets/snack.jpeg";

const logos = [burger, pizza, fries, drink];

function LogoSlider() {
  return (
    <section className="py-5">
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
                alt={`logo-${index}`}
                className="h-20 w-20 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LogoSlider;