"use client";

// packages
import { usePathname } from "next/navigation";

// local modules
import { stripAndConvertToTitleCase } from "@/app/(dashboard)/_utils/strip-pathname";

// components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function HeaderBreadcrumb() {
  const pathname = usePathname();

  return (
    <Breadcrumb className="hidden md:block">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        {pathname !== "/dashboard" && <BreadcrumbSeparator />}

        {pathname === "/dashboard" ? null : (
          <BreadcrumbItem>
            <BreadcrumbLink href={pathname}>
              {stripAndConvertToTitleCase(pathname)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
