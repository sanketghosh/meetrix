import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        <h1 className="text-center font-bricolage text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-4xl">
          Real Stories, Real Results
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {TESTIMONIALS.map((item) => (
              <CarouselItem
                key={item.fullName}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="cursor-pointer space-y-4 rounded-base border-2 border-border bg-main p-4 text-text shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-indigo-700 hover:text-bw hover:shadow-none">
                  <div>
                    {/* <img src="" alt="" /> */}
                    <div>
                      <h2>{item.fullName}</h2>
                      <p>{item.companyName}</p>
                    </div>
                  </div>
                  <p>{item.testimonial}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

/**
 *
 * NOTE: will work on carousel
 *
 */

/**
 * 
 *  <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
 * 
 * 
 */
