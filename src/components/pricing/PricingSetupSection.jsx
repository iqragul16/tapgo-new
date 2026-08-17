import { Check, Star } from "lucide-react";

const PricingSetupSection = () => {
  return (


    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 min-[801px]:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
<div className="-mt-8">            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 shadow-sm bg-white mb-8">
              <Star size={15} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Pricings
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.15] text-black mb-6">
              No down payment for materials and installation is offered.
              <br />
              You pay nothing!
            </h1>
          </div>

          {/* Right Card */}
          <div className="flex justify-center min-[801px]:justify-end min-[801px]:pr-10">
            <div className="relative w-full max-w-[520px] rounded-[30px] border-[4px] border-gray-300 bg-white p-4 md:p-8 lg:p-10 shadow-lg">

              {/* Popular Badge */}
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#FCE7EF] px-5 py-2 rounded-full">
                <span className="text-[11px] tracking-[3px] uppercase text-pink-600 font-semibold">
                  Popular
                </span>
              </div>

              <h2 className="text-xl md:text-1xl font-semibold leading-tight">
                Launch TapGo today with CHF 0 setup fees
              </h2>

              <h3 className="text-4xl font-bold mt-8 text-black">
                FREE
              </h3>

              <p className="text-lg text-gray-500 mt-3">
                fast, easy, and hassle-free!
              </p>

              <h4 className="text-lg font-semibold mt-8 mb-6 text-black">
                Our hardware includes:
              </h4>

              <div className="space-y-5">

                <div className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="text-gray-700 mt-1 shrink-0"
                  />
                  <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    The latest version of the TAPGO computing unit
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="text-gray-700 mt-1 shrink-0"
                  />
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    A pixel-perfect touchscreen
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="text-gray-700 mt-1 shrink-0"
                  />
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    A sturdy, durable kiosk housing
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="text-gray-700 mt-1 shrink-0"
                  />
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Advanced reporting
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 

export default PricingSetupSection;