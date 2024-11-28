import Link from "next/link";
import { NavMenuItems } from "./nav-items";
import Image from "next/image";
import { NavbarContent, Navbar as NavbarNext, NavbarBrand, NavbarItem } from "@nextui-org/navbar";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "Add Consultant", href: "/new-consultant" },
  { name: "CV", href: "/cv" },
  { name: "Consultants", href: "/consultants" },
  // { name: "Update", href: "/update-profile" },
];

export function Navbar() {
  return (
    <nav className="sticky border-b top-0 z-20 w-screen bg-background">
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex justify-between align-middle text-lg font-semibold gap-1">
          <Image src="/logo.png" height={36} width={35} alt="Logo" />
          <h1 className="text-xl font-bold self-center">ConsultHub</h1>
        </Link>
        <div className="hidden sm:flex sm:space-x-2">
          <NavMenuItems navItemsList={NavItems} />
        </div>
      </div>
    </nav>
  );
}
