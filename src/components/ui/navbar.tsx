import Link from "next/link";
import { NavMenuItems } from "./nav-items";
import Image from "next/image";
import { TitleThree } from "./title-2";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/my-profile" },
  { name: "CV", href: "/my-cv" },
  { name: "Consultants", href: "/consultants" },
  { name: "Update", href: "/update-profile" },
];

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex justify-between align-middle text-lg font-semibold">
          <Image src="/logo.png" height={36} width={35} alt="Logo" />
          <TitleThree titleThree="ConsultHub" />
        </Link>
        <div className="hidden sm:flex sm:space-x-2">
          <NavMenuItems navItemsList={NavItems} />
        </div>
      </div>
    </nav>
  );
}
