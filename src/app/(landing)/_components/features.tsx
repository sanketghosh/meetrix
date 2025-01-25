export default function Features() {
  const CARDS = [
    {
      cardTitle: "Custom Booking Links",
      cardDescription:
        "Create personalized booking links to share with others, making scheduling meetings a breeze.",
    },
    {
      cardTitle: "Google calender integration",
      cardDescription:
        "Sync your meetings effortlessly with Google Calendar. Automatically update events and stay on top of your schedule.",
    },
    {
      cardTitle: "Secure and Private",
      cardDescription:
        " We are fully open sourced and your data is protected with industry-standard encryption and privacy controls.",
    },
  ];

  return (
    <section className="mx-auto max-w-[1650px] px-4">
      <div className="space-y-4 border-x px-6 py-6 sm:px-8 md:px-10">
        <div className="">
          <h1 className="text-left font-bricolage text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-4xl">
            Why should you choose meetrix ?
          </h1>
          <p className="md:text-xl">
            Experience smarter scheduling with Meetrix. Designed to simplify
            your meetings and save time, Meetrix brings powerful features that
            help you stay organized and connected effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map((item) => (
            <div
              key={item.cardTitle}
              className="cursor-pointer space-y-4 rounded-base border-2 border-border bg-main p-4 text-text shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-teal-700 hover:text-bw hover:shadow-none"
            >
              <h1 className="text-lg font-semibold">{item.cardTitle}</h1>
              <p>{item.cardDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
