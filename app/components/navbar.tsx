"use client";
import React from "react";
import { FloatingNav } from "@/app/ui/floating-navbar";

import { IconHome, IconMessage } from "@tabler/icons-react";
import Link from "next/link";


export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "/project",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Resume",
      link: "/Resume",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <Link href="/">
        <h2 className="text-4xl text-center py-5 tracking-wider">
          Karthik Nair
        </h2>
      </Link>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
