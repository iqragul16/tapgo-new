import {
  CreditCard,
  Timer,
  ConciergeBell,
  BarChart3,
  Calculator,
  Printer,
} from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Versatile payment options",
    description:
      "Accept card and cash payments, offering flexibility and convenience to customers.",
  },
  {
    icon: Timer,
    title: "Reduced waiting time",
    description:
      "Streamline the ordering process and reduce waiting times, ensuring a faster and more efficient customer experience.",
  },
  {
    icon: ConciergeBell,
    title: "Improved control accuracy",
    description:
      "Minimize errors by allowing customers to enter their orders directly, eliminating communication problems and improving accuracy.",
  },
  {
    icon: BarChart3,
    title: "Savings on labor costs",
    description:
      "Optimize resource allocation by reducing the need for multiple cashiers, resulting in significant labor cost savings.",
  },
  {
    icon: Calculator,
    title: "Improved comfort for staff and customers",
    description:
      "Create a pleasant environment with self-service capabilities, allowing staff to focus on providing personalized assistance.",
  },
  {
    icon: Printer,
    title: "Compatible with multiple printers",
    description:
      "Connect effortlessly to a variety of printers, enabling efficient printing of purchase orders and seamless integration with your existing systems.",
  },
];

export default function KioskBenefits() {
  return (
    <section className="w-full px-5 py-24">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <h1
  className="
    font-sans
    text-[62px]
    font-normal
    leading-[1.1]
    tracking-[-2px]
    text-black
    text-center
  "
>
  Boost your restaurant's success with
  <br />
  TapGo's Self-Ordering Kiosk
</h1>

        <p className="mx-auto mt-4 max-w-6xl text-center font-sans text-[14px] font-normal leading-6 text-neutral-600">
  Provide customers with exclusive online offers, enable direct ordering, and streamline transactions. Our sleek kiosks facilitate in-person orders,
  <br />
  automate payments, and allow one manager to oversee multiple units, enhancing efficiency while optimizing space.
</p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="min-h-[290px] rounded-[30px] bg-[#F1F1F1] p-5 sm:p-6"
            >
              {/* Icon */}
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-md">
                <Icon
                  size={25}
                  strokeWidth={2}
                  className="text-[#C9184A]"
                />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-medium leading-tight">
                {benefit.title}
              </h3>

              <p className="text-sm leading-6 text-neutral-500">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}