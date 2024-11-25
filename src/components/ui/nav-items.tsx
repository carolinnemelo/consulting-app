"use client";

import { usePathname } from "next/navigation";
import { Button } from "../shad";
import Link from "next/link";

type Props = {
  navItemsList: { name: string; href: string }[];
};

export function NavMenuItems({ navItemsList }: Props) {
  const pathname = usePathname();

  return navItemsList.map((item) => {
    const isActive = pathname === item.href;
    return (
      <Button
        key={item.name}
        variant={isActive ? "secondary" : "ghost"}
        size="sm"
        asChild
      >
        <Link href={item.href}>{item.name}</Link>
      </Button>
    );
  });
}
