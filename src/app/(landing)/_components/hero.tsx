import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon, StarIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1650px] px-4">
      <div className="flex min-h-[calc(100vh-7rem)] flex-col border-x lg:min-h-[calc(100vh-7.5rem)] lg:flex-row xl:min-h-[calc(100vh-8.5rem)]">
        <div className="flex min-h-full flex-1 flex-col justify-center space-y-4 bg-emerald-700 px-6 sm:px-8 md:px-10">
          <h1 className="font-bricolage text-5xl font-extrabold text-bg md:text-7xl lg:text-6xl xl:text-7xl">
            Making time for what matters.
          </h1>
          <p className="leading-tight text-bw md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            omnis nobis minus, aspernatur nihil culpa ipsa quia autem optio
            officia?
          </p>

          <div className="flex items-center gap-4">
            <Button>
              <StarIcon />
              Get Started
            </Button>
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
          </div>
        </div>
        <div className="relative z-0 flex flex-1 items-center justify-center bg-bw">
          <img
            src="/hero-illus.png"
            alt=""
            className="absolute z-10 size-72 md:size-80 lg:size-96 xl:h-[45rem] xl:w-[45rem]"
          />
        </div>
      </div>
    </section>
  );
}
