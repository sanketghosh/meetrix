// packages
import { ArrowRightIcon, StarIcon } from "lucide-react";

// components
import { Logoipsum } from "@/app/(landing)/_assets";
import { Header } from "@/app/(landing)/_components";
import RetroGrid from "@/components/ui/magic-ui/retro-grid";
import { Button } from "@/components/ui/button";
import BentoBox from "@/app/(landing)/_components/bento-box";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="relative min-h-[calc(100vh-56px)]">
        <div className="absolute bottom-1/2 left-1/2 top-[40%] z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-6 px-4 lg:px-6">
          <div className="flex items-center gap-1 rounded-full border bg-muted px-4 py-1 text-sm font-medium capitalize">
            <StarIcon size={16} />
            Star us on GitHub
            <ArrowRightIcon size={16} />
          </div>
          <h1 className="max-w-4xl text-center text-2xl font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl">
            Scheduling Shouldn't Be a Puzzle, <br className="max-md:hidden" />{" "}
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              But We Know It Is
            </span>
          </h1>
          <p className="max-w-2xl text-center text-sm lg:text-base">
            Meetrix is a meeting scheduling platform that helps teams simplify
            their calendars and reduce back-and-forth emailing, saving time and
            boosting productivity.
          </p>
          <Button>Get Started</Button>
        </div>
        <RetroGrid className="h-[calc(100vh-56px)]" />
      </section>
      <section className="mx-auto flex h-full max-w-7xl flex-col items-center justify-between space-y-6 px-4 py-16 lg:px-6">
        <h2 className="text-center text-sm font-medium text-muted-foreground">
          Trusted by employees from leading companies around the globe.
        </h2>
        <div className="flex w-full flex-wrap items-center justify-between gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Logoipsum key={item} className="w-20 md:w-24 lg:w-28" />
          ))}
        </div>
      </section>
      <section className="mx-auto flex h-full max-w-7xl flex-col items-center justify-between space-y-6 px-4 py-16 lg:px-6">
        <h2 className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
          We provide{" "}
          <span className="text-muted-foreground">features like nobody</span>{" "}
          does.
        </h2>
        <BentoBox />
      </section>
    </div>
  );
}
