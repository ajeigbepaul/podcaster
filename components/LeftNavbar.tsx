"use client"
import { sidebarLinks } from "@/app/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href={"/"}
          className="flex cursor-pointer item-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image alt="logo" src={"/icons/logo.svg"} width={23} height={27} />
          <p className="text-24 font-extrabold text-white max-lg:hidden">
            Podcastr
          </p>
        </Link>
        {sidebarLinks.map(({ route, imgURL, label }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${router}/`);
          return (
            <Link
              href={route}
              className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",{
                'bg-nav-focus border-r-4 border-orange-1':isActive
              })}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftNavbar;
