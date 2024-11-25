'use client'

import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button, Sheet, SheetContent, SheetTrigger } from "../shad";
import { useState } from "react";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "All consultants", href: "/consultants" },
  { name: "My Profile", href: "/profile" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          Logo
        </Link>
        <div className="hidden sm:flex sm:space-x-2">
          {NavItems.map((item) => (
            <Button key={item.name} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[200px] sm:hidden">
            <div className="grid gap-2 py-6">
              {NavItems.map((item) => (
                <Button key={item.name} variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
