import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const TESTIMONIALS = [
    {
      fullName: "Emily Chen",
      companyName: "GreenTech Inc.",
      testimonial:
        "Meetrix has been a game-changer for our team! The ease of scheduling meetings and integrating with our existing calendar has saved us so much time.",
    },
    {
      fullName: "Rahul Patel",
      companyName: "Zeta Marketing",
      testimonial:
        "I was blown away by how seamless Meetrix is. The UI is intuitive, and the reminders feature has reduced no-shows significantly.",
    },
    {
      fullName: "Sophia Rodriguez",
      companyName: "Finverge",
      testimonial:
        "Meetrix has streamlined our client onboarding process. The customization options are impressive, and our clients love the simplicity of scheduling meetings.",
    },
    {
      fullName: "David Lee",
      companyName: "Apex Ventures",
      testimonial:
        "As a busy investor, I need tools that save me time. Meetrix delivers. The integration with my calendar is flawless, and the support team is top-notch.",
    },
    {
      fullName: "Priya Jain",
      companyName: "Crescent Health",
      testimonial:
        "Meetrix has improved our team's productivity significantly. The ability to schedule recurring meetings and set reminders has been a huge help.",
    },
  ];

  return (
    <section className="mx-auto max-w-[1650px] px-4">
      <div className="space-y-6 border-x px-6 py-6 sm:px-8 md:px-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-bricolage text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-4xl">
            Real Stories, Real Results
          </h1>
          <p className="text-center md:text-xl">
            Don't just take our word for it. Our customers share their
            experiences with Meetrix. We have simplified scheduling for
            thousands of users.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.fullName}
              className="cursor-pointer space-y-4 rounded-base border-2 border-border bg-emerald-700 p-4 text-bw shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-main hover:text-text hover:shadow-none"
            >
              <div className="flex items-center gap-3">
                <Avatar className="size-12 bg-bw hover:text-text">
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
                <div className="leading-5">
                  <h1 className="text-lg font-semibold">{item.fullName}</h1>
                  <p>{item.companyName}</p>
                </div>
              </div>
              <p>{item.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 *
 * NOTE: will work on carousel
 *
 */
