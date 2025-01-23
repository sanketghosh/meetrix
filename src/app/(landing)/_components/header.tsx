import { Button } from "@/components/ui/button";
import { NAVBAR_DATA } from "@/data";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-14 items-center border-b">
      <div className="mx-auto flex h-full w-full max-w-[1650px] items-center justify-between px-4">
        <nav className="hidden items-center gap-7 sm:flex">
          {NAVBAR_DATA.map((item) => (
            <Link key={item.href} href={item.href} className="capitalize">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button size={"icon"} className="sm:hidden" variant={"noShadow"}>
          <MenuIcon />
        </Button>
        <Link
          href={"/register"}
          className="flex h-full items-center border-x bg-text px-4 font-medium text-bg transition-all hover:bg-bw hover:text-text"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
