// packages
import { PanelLeftOpenIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

// local modules
import { cn } from "@/lib/utils";

// components
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from "@/app/(dashboard)/_components/nav";
import HeaderBreadcrumb from "@/app/(dashboard)/_components/header-breadcrumb";

export default function Header() {
  return (
    <header className="flex h-14 w-full items-center justify-between border-b px-4">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"noShadow"} size={"icon"} className="md:hidden">
              <PanelLeftOpenIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="px-0 py-4" side={"left"}>
            <SheetHeader className="hidden">
              <SheetTitle className="text-left">meetrix</SheetTitle>
              <SheetDescription className="text-left">
                Access all your dashboard menus
              </SheetDescription>
            </SheetHeader>
            <Navbar />
          </SheetContent>
        </Sheet>
        <HeaderBreadcrumb />
      </div>

      <Link
        href={"/add-event"}
        className={cn(
          buttonVariants({
            variant: "neutral",
            size: "sm",
          }),
        )}
      >
        <PlusIcon />
        Add Event
      </Link>
    </header>
  );
}
