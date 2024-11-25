'use client'

import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button, Sheet, SheetContent, SheetTrigger } from "../shad";
import { useState } from "react";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Logo</span>
        </Link>
        <div className="hidden md:flex md:space-x-4">
          {NavItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-2 py-6">
                {NavItems.map((item) => (
                  <Button key={item.name} variant="ghost" asChild className="justify-start" onClick={() => setIsOpen(false)}>
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

