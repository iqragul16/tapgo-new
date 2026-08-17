import pricingImage from "../../assets/pricing2.avif";

function PricingHero() {
  return (
    <section className="w-full bg-white px-5 py-30 ">
      <div className="max-w-6xl mx-auto flex justify-center mb-0">
        <img
          src={pricingImage}
          alt="TapGo Pricing"
          className="w-full max-w-5xl h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default PricingHero;