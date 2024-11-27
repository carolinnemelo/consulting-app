import { HOne } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { FooterItems } from "./footer-items";

const footerItems = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="p-4 bg-background md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex items-center justify-center align-middle text-lg font-semibold gap-2"
        >
          <Image src="/logo.png" height={36} width={35} alt="Logo" />
          <HOne>ConsultHub</HOne>
        </Link>
        <p className="my-6 text-muted-foreground">
          A modern platform for workforce and talent management, built for
          businesses looking to simplify and succeed.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-muted-foreground">
          <FooterItems footerItemsList={footerItems} />
        </ul>
        <span className="text-sm text-muted-foreground">
          ©
          <Link href={"/"} className="hover:underline">
            {` ConsultHub™`}
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
