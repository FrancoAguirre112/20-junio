"use client";

import img01 from "@/public/assets/icons/Logo.webp";

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
import Image from "next/image";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { mainBlogPosts } from "@/data/blog-posts";

// 1. Import the Fade plugin
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import eye1 from "@/public/assets/images/eye1.webp";
import eye2 from "@/public/assets/images/eye2.webp";
import eye3 from "@/public/assets/images/eye3.webp";

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replaces spaces with -
    .replace(/[^\w\-]+/g, "") // Removes non-word chars
    .replace(/\-\-+/g, "-"); // Replaces multiple - with single -
};

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
            <CarouselItem className="h-full">
              <div
                className="relative flex justify-center items-center bg-cover bg-center w-full h-full"
                style={{ backgroundImage: `url(${eye1.src})` }}
              ></div>
            </CarouselItem>

            {/* Slide 2 */}
            <CarouselItem className="h-full">
              <div
                className="relative flex justify-center items-center bg-cover bg-center w-full h-full"
                style={{ backgroundImage: `url(${eye2.src})` }}
              ></div>
            </CarouselItem>

            {/* Slide 3 */}
            <CarouselItem className="h-full">
              <div
                className="relative flex justify-center items-center bg-cover bg-center w-full h-full"
                style={{ backgroundImage: `url(${eye3.src})` }}
              ></div>
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
                src={img01}
                alt="20 de juno"
                width={600}
                height={400}
                className=""
              />
            </div>
            <div className="md:text-left text-center">
              <h2 className="mb-4 font-bold text-gray-700 text-5xl">
                INTRODUCCIÓN
              </h2>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Con más de 20 años de experiencia, en 20 de Junio ofrecemos
                soluciones confiables en insumos y equipos médicos. Combinamos
                innovación, trazabilidad y respaldo científico para mejorar la
                salud en todo el país.
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
              <Link
                href={"/productos#insumos"}
                className="flex justify-center items-center bg-white hover:bg-[#0076BB] rounded-lg w-[40dvw] md:w-auto transition-all hover:cursor-pointer"
              >
                <Image
                  src="/assets/images/insumos.webp"
                  alt="Intraocular Lenses"
                  width={350}
                  height={350}
                  className="hover:brightness-0 hover:invert-100 p-8 aspect-square"
                />
              </Link>
              <Link
                href={"/productos#equipos"}
                className="flex justify-center items-center bg-white hover:bg-[#0076BB] rounded-lg w-[40dvw] md:w-auto transition-all hover:cursor-pointer"
              >
                <Image
                  src="/assets/images/equipos.webp"
                  alt="Intraocular Lenses"
                  width={350}
                  height={350}
                  className="hover:brightness-0 hover:invert-100 p-8 aspect-square"
                />
              </Link>
            </div>
          </div>
        </section>
        {/* Información Section */}
        <section id="informacion" className="bg-white py-20">
          <div className="mx-auto px-4 text-center container">
            <h2 className="mb-12 font-bold text-gray-700 text-5xl">
              SALUD VISUAL
            </h2>

            <Carousel
              opts={{
                align: "start",
                loop: true, // Optional: makes the carousel loop
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {/* We now map over your actual blog posts */}
                {mainBlogPosts.map((post) => (
                  <CarouselItem
                    key={post.id} // Use a unique key from your data
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <Link
                        href={`/salud-visual/${slugify(post.id)}`}
                        className="group block h-full"
                      >
                        <Card className="flex flex-col group-hover:shadow-xl rounded-lg h-full overflow-hidden text-left transition-shadow duration-300">
                          <CardHeader className="p-0">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              width={400}
                              height={250}
                              className="w-full h-60 object-cover" // Added a fixed height for consistency
                            />
                          </CardHeader>
                          <CardContent className="flex-grow p-6">
                            <CardTitle className="mb-2 font-semibold text-gray-800 group-hover:text-sky-600 text-xl transition-colors">
                              {post.title}
                            </CardTitle>
                            {/* Added line-clamp to ensure descriptions are a similar length */}
                            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                              {post.description}
                            </p>
                          </CardContent>
                          <CardFooter className="p-6 pt-0">
                            {/* The whole card is a link, so this acts as a visual cue */}
                            <span className="font-semibold text-sky-600 group-hover:underline">
                              Leer Más
                            </span>
                          </CardFooter>
                        </Card>
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        ;
      </main>
    </div>
  );
}
