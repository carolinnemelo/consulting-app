import Link from "next/link";
import { NavMenuItems } from "./nav-items";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "My profile", href: "/my-profile" },
  { name: "All consultants", href: "/contact" },
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
