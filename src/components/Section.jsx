function Section() {
  const stats = [
    {
      title: "Average ticket",
      value: "+35%",
      description:
        "Customers tend to spend more with self-service kiosks, often adding extra items thanks to upsell prompts and clear menu visibility.",
    },
    {
      title: "Waiting time",
      value: "-30%",
      description:
        "By eliminating order queues, TapGo helps speed up service, keeping queues short and customers happy during peak hours.",
    },
    {
      title: "Faster table rotation",
      value: "+40%",
      description:
        "With faster ordering and payment, tables become available more quickly, allowing you to serve more customers in the same amount of time.",
    },
  ];

  return (
    <section className="w-full bg-white py-0 ">
      <div className="max-w-5xl mx-auto px-6 ">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-light">
            Knowledge
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {stats.map((item, index) => (
           <div
  key={index}
  className="
    bg-gray-200
    rounded-[35px]
    px-6
    py-10
    flex
    flex-col
    items-center
    text-center
    w-[65%]
    sm:w-[50%]
    md:w-full
    mx-auto
    min-h-[180px]
    md:min-h-[460px]
    lg:min-h-[420px]
  "
>
              <h4 className="text-xl text-gray-700">
                {item.title}
              </h4>

              <h3 className="text-6xl md:text-7xl font-light my-12">
                {item.value}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Section;