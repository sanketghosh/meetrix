// packages
import React from "react";
import Link from "next/link";

// local modules
import { cn } from "@/lib/utils";

// components
import { Button, buttonVariants } from "@/components/ui/button";

export default function Header() {
  const NAV_ITEMS = [
    {
      id: 1,
      label: "home",
      href: "/",
    },
    {
      id: 2,
      label: "about",
      href: "/about",
    },
    {
      id: 3,
      label: "blogs",
      href: "/blogs",
    },
  ];

  return (
    <header className="h-14 w-full border-b">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-6">
        <Link
          href="/"
          className="text-lg font-semibold capitalize md:text-xl lg:text-2xl"
        >
          meetrix
        </Link>

        <nav className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="text-sm font-medium capitalize text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={"/sign-in"}
            className={cn(
              buttonVariants({
                size: "sm",
              }),
            )}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
