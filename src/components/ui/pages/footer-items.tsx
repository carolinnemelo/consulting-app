"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { ButtonShad } from "@/components";

type Props = {
  footerItemsList: { name: string; href: string }[];
};

export function FooterItems({ footerItemsList }: Props) {
  const pathname = usePathname();

  return footerItemsList.map((item) => {
    const isActive = pathname === item.href;
    return (
      <ButtonShad
        key={item.name}
        variant={isActive ? "secondary" : "ghost"}
        size="sm"
        asChild
      >
        <Link href={item.href}>{item.name}</Link>
      </ButtonShad>
    );
  });
}
