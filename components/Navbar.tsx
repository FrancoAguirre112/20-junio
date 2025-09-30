"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="flex justify-between items-center mx-auto px-4 py-4 container">
        <Link href="/" passHref>
          <div
            className={`w-[5dvw] font-bold cursor-pointer ${isScrolled ? "text-gray-800" : "text-gray-500"}`}
          >
            <Image
              src={"/assets/icons/Logo.webp"}
              alt="20 de junio"
              height={1000}
              width={1000}
            />
          </div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="space-x-6 text-2xl!">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink
                  className={`${isScrolled ? "text-gray-700 hover:text-teal-500" : "text-gray-500 hover:text-gray-200"}`}
                >
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#profile" passHref>
                <NavigationMenuLink
                  className={`${isScrolled ? "text-gray-700 hover:text-teal-500" : "text-gray-500 hover:text-gray-200"}`}
                >
                  Productos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#products" passHref>
                <NavigationMenuLink
                  className={`${isScrolled ? "text-gray-700 hover:text-teal-500" : "text-gray-500 hover:text-gray-200"}`}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#cataract" passHref>
                <NavigationMenuLink
                  className={`${isScrolled ? "text-gray-700 hover:text-teal-500" : "text-gray-500 hover:text-gray-200"}`}
                >
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
