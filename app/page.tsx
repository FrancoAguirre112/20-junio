"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

// 1. Import the Fade plugin
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // 2. Simplify the useEffect hook back to its original purpose (for the dots)
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[70dvh]">
        {/* ... your spinning images ... */}
        <div className="select-none">
          <Image
            className="top-1/2 left-1/2 z-20 absolute -translate-x-1/2 -translate-y-1/2"
            src={"/assets/images/banner_cir1.webp"}
            alt="spinner"
            width={1000}
            height={1000}
          />
          <Image
            className="top-1/2 left-1/2 z-20 absolute -translate-x-1/2 -translate-y-1/2 animate-spin-fast"
            src={"/assets/images/banner_cir2.webp"}
            alt="spinner"
            width={1000}
            height={1000}
          />
          <Image
            className="top-1/2 left-1/2 z-20 absolute -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
            src={"/assets/images/banner_cir3.webp"}
            alt="spinner"
            width={1000}
            height={1000}
          />
          <Image
            className="top-1/2 left-1/2 z-20 absolute -translate-x-1/2 -translate-y-1/2 animate-spin-slow2"
            src={"/assets/images/banner_cir4.webp"}
            alt="spinner"
            width={1000}
            height={1000}
          />
        </div>

        <Carousel
          setApi={setApi}
          // 3. Add the plugins prop here
          plugins={[
            Fade(),
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-full" // No more `carousel-fade` class needed
          opts={{
            loop: true,
          }}
        >
          {/* 4. Remove the extra embla__container class */}
          <CarouselContent className="h-[70dvh]">
            {/* Slide 1 (Remove embla__slide class) */}
            <CarouselItem className="h-full">
              <div className="relative flex justify-center items-center bg-[url('/assets/images/banner1.webp')] bg-cover bg-center w-full h-full">
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </CarouselItem>

            {/* Slide 2 */}
            <CarouselItem className="h-full">
              <div className="relative flex justify-center items-center bg-[url('/assets/images/banner2.webp')] bg-cover bg-center w-full h-full">
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CarouselItem>

            {/* Slide 3 */}
            <CarouselItem className="h-full">
              <div className="relative flex justify-center items-center bg-[url('/assets/images/banner3.webp')] bg-cover bg-center w-full h-full">
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CarouselItem>

            {/* Slide 4 */}
            <CarouselItem className="h-full">
              <div className="relative flex justify-center items-center bg-[url('/assets/images/banner4.webp')] bg-cover bg-center w-full h-full">
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        {/* Navigation Dots */}
        <div className="bottom-6 left-1/2 z-20 absolute flex justify-center gap-2 -translate-x-1/2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`
                rounded-full p-1 transition-all duration-300
                ${
                  current === index
                    ? "border border-white"
                    : "border border-transparent"
                }
              `}
            >
              <div
                className={`
                  h-2 w-2 rounded-full transition-colors duration-300
                  ${current === index ? "bg-white" : "bg-white/50"}
                `}
              />
            </button>
          ))}
        </div>
      </section>
      <main>
        {/* Profile Section */}
        <section id="profile" className="bg-white py-24">
          <div className="items-center gap-12 grid md:grid-cols-2 mx-auto px-4 container">
            <div>
              <Image
                src="/assets/images/Placeholder.webp"
                alt="Caregiver with elderly woman"
                width={600}
                height={400}
                className="shadow-xl rounded-lg"
              />
            </div>
            <div className="md:text-left text-center">
              <h2 className="mb-4 font-bold text-gray-700 text-5xl">
                INTRODUCCIÓN
              </h2>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Breve texto sobre quien es 20 de junio
              </p>
              {/* <Button variant="outline">Read More</Button> */}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-main-500 py-20">
          <div className="mx-auto px-4 text-center container">
            <h2 className="mb-12 font-bold text-white text-5xl">PRODUCTOS</h2>
            <div className="flex justify-between">
              <div className="flex justify-center items-center bg-white hover:bg-[#0076BB] p-8 rounded-lg transition-all hover:cursor-pointer">
                <Image
                  src="/assets/images/insumos.webp"
                  alt="Intraocular Lenses"
                  width={350}
                  height={350}
                  className="hover:brightness-0 hover:invert-100 mx-auto mb-4 transition-all"
                />
              </div>
              <div className="flex justify-center items-center bg-white hover:bg-[#0076BB] p-8 rounded-lg transition-all hover:cursor-pointer">
                <Image
                  src="/assets/images/equipos.webp"
                  alt="Intraocular Lenses"
                  width={350}
                  height={350}
                  className="hover:brightness-0 hover:invert-100 mx-auto mb-4 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Información Section */}
        <section id="informacion" className="bg-white py-20">
          <div className="mx-auto px-4 text-center container">
            <h2 className="mb-12 font-bold text-gray-700 text-5xl">
              INFORMACIÓN
            </h2>

            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {/* We create an array of 6 items and map over it to generate the cards */}
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    // This is the key for showing 3 items:
                    // basis-full on small screens, 1/2 on medium, and 1/3 on large.
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <Card className="flex flex-col rounded-lg h-full overflow-hidden text-left hover:cursor-pointer">
                        <CardHeader className="p-0">
                          <Image
                            src="/assets/images/Placeholder.webp"
                            alt="Blog post about eye health"
                            width={400}
                            height={250}
                            className="w-full h-auto object-cover"
                          />
                        </CardHeader>
                        <CardContent className="flex-grow p-6">
                          <CardTitle className="mb-2 font-semibold text-gray-800 text-xl">
                            Mantenga sus ojos sanos
                          </CardTitle>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Hay muchas cosas que puede hacer para mantener sus
                            ojos sanos y proteger su visión. Un examen es la
                            mejor forma de detectar problemas.
                          </p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          {/* The p-0 removes extra padding from the link-style button */}
                          <Button
                            variant="link"
                            className="p-0 text-sky-600 hover:text-sky-700"
                          >
                            Leer Más
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-white border-t border-t-gray-200 text-slate-700">
        <div className="mx-auto px-4 py-10 container">
          <div className="gap-12 grid md:grid-cols-3">
            {/* Column 1: Logo */}
            <div className="w-40">
              {" "}
              {/* A fixed width is often more reliable than dvw here */}
              <Link href="/" passHref>
                <Image
                  src={"/assets/icons/Logo.webp"}
                  alt="20 de Junio Logo"
                  height={1000}
                  width={1000}
                  className="cursor-pointer"
                />
              </Link>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="mb-4 font-semibold uppercase tracking-wider">
                Navegación
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div>
              <h4 className="mb-4 font-semibold uppercase tracking-wider">
                Contacto
              </h4>
              <div className="space-y-2 text-sm">
                <p>Campana 4689 - C1419AHM - CABA</p>
                <p>
                  <strong>Tel./Fax:</strong> 11 4571 9291
                  <br />
                  <strong>Cel.:</strong> 11 3172 9667
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-t-gray-200 text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} 20 de Junio. Todos los derechos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
