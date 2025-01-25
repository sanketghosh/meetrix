// packages
import { ArrowRightCircle, GithubIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

// local modules
import { cn } from "@/lib/utils";

// components
import { Arrow, StarDoodle } from "@/app/(landing)/_assets";
import { Button, buttonVariants } from "@/components/ui/button";

export default async function Hero() {
  const user = await currentUser();

  return (
    <section className="mx-auto max-w-[1650px] px-4">
      <div className="flex min-h-[calc(100vh-7rem)] flex-col border-x lg:min-h-[calc(100vh-7.5rem)] lg:flex-row xl:min-h-[calc(100vh-8.5rem)]">
        <div className="relative flex min-h-full flex-1 flex-col justify-center space-y-4 bg-teal-700 px-6 sm:px-8 md:px-10">
          <StarDoodle className="absolute top-20 lg:top-56" />
          <h1 className="font-bricolage text-5xl font-extrabold text-bw md:text-7xl lg:text-6xl xl:text-7xl">
            Making time for what matters.
          </h1>
          <p className="leading-tight text-bg md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            omnis nobis minus, aspernatur nihil culpa ipsa quia autem optio
            officia?
          </p>

          <div className="relative flex items-center gap-4">
            <Link
              className={cn(buttonVariants({ variant: "default" }))}
              href={user ? "/dashboard" : "/sign-in"}
            >
              {user ? (
                <>
                  <ArrowRightCircle />
                  Dashboard
                </>
              ) : (
                <>
                  <StarIcon />
                  Get Started
                </>
              )}
            </Link>
            <Link
              href={"https://github.com/sanketghosh/meetrix"}
              className={cn(
                buttonVariants({
                  variant: "neutral",
                }),
              )}
            >
              <GithubIcon />
              Source Code
            </Link>
            <Arrow className="absolute -bottom-20 left-10 scale-x-[-1.5]" />
          </div>
        </div>
        <div className="relative z-0 flex flex-1 items-center justify-center bg-bw">
          <img
            src="/hero-illus.svg"
            alt=""
            className="absolute z-10 size-72 md:size-80 lg:size-96 xl:h-[45rem] xl:w-[45rem]"
          />
        </div>
      </div>
    </section>
  );
}
