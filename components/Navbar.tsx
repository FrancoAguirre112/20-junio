"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// --- NEW IMPORTS ---
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose, // Import SheetClose
} from "@/components/ui/sheet";
// --- END NEW IMPORTS ---

// --- 1. Define links as an array (DRY principle) ---
const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Nuestra Historia y Propósito" },
  { href: "/productos", label: "Productos" },
  { href: "/salud-visual", label: "Salud Visual" },
  { href: "/cotizacion", label: "Obtener Cotización" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const useSolidNavbar = isScrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        useSolidNavbar ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center mx-auto px-4 py-4 container">
        {/* Logo */}
        <Link href="/" passHref>
          <div
            className={`flex font-bold gap-2 w-[200px] md:w-[20%] cursor-pointer ${
              useSolidNavbar ? "text-gray-800" : "text-gray-500"
            }`}
          >
            <Image
              src={"/assets/icons/Logo-1.png"}
              alt="20 de junio"
              height={1000}
              width={1000}
              className="w-1/3"
            />
            <Image
              src={"/assets/icons/Logo-2.png"}
              alt="20 de junio"
              height={1000}
              width={1000}
              className={`${useSolidNavbar ? "" : "invert brightness-0"}`}
            />
          </div>
        </Link>

        {/* --- 2. Desktop Navigation (Hidden on mobile) --- */}
        <div className="hidden md:block whitespace-nowrap">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} passHref>
                    <NavigationMenuLink
                      href={link.href}
                      className={`${
                        useSolidNavbar
                          ? "text-gray-700 hover:text-main-500"
                          : "text-white hover:text-gray-200"
                      }`}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* --- 3. Mobile Navigation (Hamburger Menu) --- */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors ${
                  useSolidNavbar
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white p-5 w-full">
              {/* Logo inside mobile menu */}
              <div className="mb-8">
                <Link href="/" passHref>
                  <div className="flex gap-2 w-[180px] font-bold text-gray-800 cursor-pointer">
                    <Image
                      src={"/assets/icons/Logo-1.png"}
                      alt="20 de junio"
                      height={1000}
                      width={1000}
                      className="w-1/3"
                    />
                    <Image
                      src={"/assets/icons/Logo-2.png"}
                      alt="20 de junio"
                      height={1000}
                      width={1000}
                    />
                  </div>
                </Link>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  // SheetClose will automatically close the menu on click
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-gray-700 hover:text-main-500 text-lg"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
