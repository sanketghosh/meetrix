// packages
import {
  CalendarCheck2Icon,
  ClockIcon,
  HandshakeIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const DASHBOARD_NAV_ITEMS = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboardIcon size={20} />,
  },
  {
    href: "/events",
    label: "events",
    icon: <CalendarCheck2Icon size={20} />,
  },
  {
    href: "/meetings",
    label: "meetings",
    icon: <HandshakeIcon size={20} />,
  },
  {
    href: "/availability",
    label: "availability",
    icon: <ClockIcon size={20} />,
  },
];

export default function Navbar() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="flex h-14 items-center justify-start border-b px-4">
          <Link
            href={"/dashboard"}
            className="flex items-center gap-1 font-bricolage text-xl font-bold"
          >
            <div className="rounded-base border border-text bg-main px-2 py-1 text-text">
              M
            </div>
            <p className="text-3xl font-extrabold">meetrix</p>
          </Link>
        </div>
        <div className="flex flex-col">
          {DASHBOARD_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-11 items-center gap-1 border-b px-4 font-medium capitalize transition-all hover:bg-bg"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 rounded-base border bg-bg p-2">
          <div className="size-12 overflow-hidden rounded-full border bg-bw md:size-10 lg:size-14">
            <img src="/user.svg" alt="user" className="size-full" />
          </div>
          <div className="truncate leading-tight">
            <h2 className="font-bold">John Doe</h2>
            <p className="text-sm font-medium">johndoe@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
