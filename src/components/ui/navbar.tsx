"use client";
import Link from "next/link";
import { NavMenuItems } from "./nav-items";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "Consultants", href: "/consultants" },
  { name: "Add Consultant", href: "/new-consultant" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="sticky border-b top-0 z-20 w-screen bg-background">
      <div className="flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          className="flex justify-between align-middle text-lg font-semibold gap-1"
        >
          <Image src="/logo.png" height={36} width={35} alt="Logo" />
          <h1 className="text-xl font-bold self-center">ConsultHub</h1>
        </Link>
        <div>
          <div className="hidden md:block">
            <NavMenuItems navItemsList={NavItems} />
          </div>

          <div className="block md:hidden">
            <button onClick={handleClick} aria-label="Toggle Menu">
              <Menu />
            </button>

            {isOpen && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-md p-4  flex flex-col">
                <NavMenuItems navItemsList={NavItems} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
