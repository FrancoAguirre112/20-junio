"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 2. Get the current page's path

  // 3. Create a single condition for the solid navbar style
  // The navbar is solid if we've scrolled OR if we are NOT on the homepage.
  const useSolidNavbar = isScrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      // 4. Use the new condition here
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        useSolidNavbar ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center mx-auto px-4 py-4 container">
        <Link href="/" passHref>
          <div
            // And here
            className={`flex font-bold gap-2 w-[20%] cursor-pointer ${
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
              // And here
              className={`${useSolidNavbar ? "" : "invert brightness-0"}`}
            />
          </div>
        </Link>
        <NavigationMenu className="whitespace-nowrap">
          <NavigationMenuList className="space-x-6 text-2xl!">
            {/* Replace isScrolled with useSolidNavbar for all links */}
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink
                  className={`${
                    useSolidNavbar
                      ? "text-gray-700 hover:text-main-500"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/sobre-nosotros" passHref>
                <NavigationMenuLink
                  className={`${
                    useSolidNavbar
                      ? "text-gray-700 hover:text-main-500"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  Nuestra Historia y Propósito
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/productos" passHref>
                <NavigationMenuLink
                  className={`${
                    useSolidNavbar
                      ? "text-gray-700 hover:text-main-500"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  Productos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/salud-visual" passHref>
                <NavigationMenuLink
                  className={`${
                    useSolidNavbar
                      ? "text-gray-700 hover:text-main-500"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  Salud Visual
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/cotizacion" passHref>
                <NavigationMenuLink
                  className={`${
                    useSolidNavbar
                      ? "text-gray-700 hover:text-main-500"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  Obtener Cotización
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
