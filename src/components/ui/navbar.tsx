import Link from "next/link";
import { NavMenuItems } from "./nav-items";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/my-profile" },
  { name: "CV", href: "/my-cv" },
];

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          Logo
        </Link>
        <div className="hidden sm:flex sm:space-x-2">
          <NavMenuItems navItemsList={NavItems} />
        </div>
      </div>
    </nav>
  );
}
