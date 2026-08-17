import {
  FaDraftingCompass,
  FaShoppingCart,
  FaCreditCard,
  FaCog,
} from "react-icons/fa";

function AdvantageSection() {
  const features = [
    {
      icon: <FaDraftingCompass size={20} />,
      title: "Designed to Fit You",
      description:
        "TapGo’s kiosk solution is built to adapt to your restaurant’s unique needs—no matter the size or style. Whether you run a cozy coffee shop, a bustling fast food outlet, or a multi-location franchise, our system is tailored to fit your operations seamlessly. With flexible configuration and no setup hassle, TapGo makes it easy to scale smartly.",
    },
    {
      icon: <FaShoppingCart size={20} />,
      title: "Smooth Ordering Flow",
      description:
        "With over three years of refinement, TapGo offers an intuitive, distraction-free ordering experience. The system guides customers through each step with clarity and speed, reducing confusion and ensuring faster service. It’s designed to keep lines moving and customers satisfied—every time.",
    },
    {
      icon: <FaCreditCard size={20} />,
      title: "Effortless Payments",
      description:
        "TapGo supports seamless, fully integrated payment options—including cards, Apple Pay, Google Pay, and Payconiq. Transactions are quick and contactless, eliminating the need for cash handling and reducing wait times. It's a smoother, safer way to pay—for both staff and customers.",
    },
    {
      icon: <FaCog size={20} />,
      title: "Custom Look & Feel",
      description:
        "Your brand deserves to shine through every detail—and with TapGo, it does. We fully customize the kiosk’s exterior design and user interface to reflect your restaurant’s unique identity. From branding to layout, everything feels like a natural extension of your space and style.",
    },
  ];

  return (
<section className="w-full bg-white py-20">
<div className="max-w-7xl px-6 sm:px-8 lg:px-30">
    {/* Heading */}
    <div className="text-center">
      <h2 className="
    mt-4
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-5xl
    text-gray-900
    font-normal
    leading-normal">
        The TapGo Advantage
      </h2>

<p className="mt-4 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-600 italic leading-relaxed">        From ordering to payments and branding, TapGo adapts to your
        workflow—effortlessly.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-x-24 lg:gap-y-20 mt-16 md:mt-20">

      {features.map((item, index) => (
        <div
  key={index}
  className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-md mx-auto lg:mx-0"
>

          <div className="text-2xl md:text-3xl text-black mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl md:text-2xl font-medium mb-4">
  {item.title}
</h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
  {item.description}
</p>

        </div>
      ))}

    </div>

  </div>
</section>
  );
}

export default AdvantageSection;