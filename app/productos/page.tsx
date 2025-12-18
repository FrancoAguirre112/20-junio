"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PRODUCT_DATA } from "@/lib/product-data";
import { Product } from "@/types/index";
import ProductModal from "@/components/ProductModal";
import { ArrowLeft } from "lucide-react";

export default function ProductosPage() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<
    "Insumos" | "Equipos" | null
  >(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<"LIO" | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // This hook for initial load from hash is correct.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#insumos") {
      setSelectedCategory("Insumos");
      setTimeout(() => {
        document
          .getElementById("insumos")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (hash === "#equipos") {
      setSelectedCategory("Equipos");
      setTimeout(() => {
        document
          .getElementById("equipos")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  // Sync state with URL and scroll
  useEffect(() => {
    let hash = "";
    if (selectedCategory === "Insumos") {
      hash = "#insumos";
    } else if (selectedCategory === "Equipos") {
      hash = "#equipos";
    }

    if (hash) {
      router.push(hash, { scroll: false });
    } else {
      router.replace(window.location.pathname, { scroll: false });
    }

    if (selectedCategory) {
      const timer = setTimeout(() => {
        const element = document.getElementById(selectedCategory.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory, router]);

  const handleCategoryClick = (category: "Insumos" | "Equipos") => {
    setSelectedCategory((prev) => (prev === category ? null : category));
    setSelectedSubCategory(null);
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // --- ⬇️ CHANGED LOGIC HERE ⬇️ ---
  // Before: !p.subCategory (Excluded "Visual")
  // Now: p.subCategory !== "LIO" (Includes "Visual" AND items with no subCategory)
  const generalInsumos = useMemo(
    () =>
      PRODUCT_DATA.filter(
        (p) => p.category === "Insumos" && p.subCategory !== "LIO"
      ),
    []
  );
  // --- ⬆️ END CHANGE ⬆️ ---

  const lioProducts = useMemo(
    () => PRODUCT_DATA.filter((p) => p.subCategory === "LIO"),
    []
  );

  const equiposProducts = useMemo(
    () => PRODUCT_DATA.filter((p) => p.category === "Equipos"),
    []
  );

  return (
    <>
      <main className="mt-[5dvh]">
        <section id="seleccion" className="py-20">
          <div className="mx-auto px-4 text-center container">
            <div className="flex flex-row justify-center items-center gap-8">
              {/* Insumos Category Card */}
              <div
                onClick={() => handleCategoryClick("Insumos")}
                className={`flex w-2/5 max-w-56 aspect-square cursor-pointer flex-col items-center justify-center p-5 rounded-lg shadow-lg transition-all duration-300
                  ${
                    selectedCategory === "Insumos"
                      ? "bg-[#0069A8]"
                      : "bg-white hover:bg-gray-50"
                  }`}
              >
                <Image
                  src="/assets/images/insumos.webp"
                  alt="Insumos Icon"
                  width={500}
                  height={500}
                  className={`w-full h-full object-contain ${
                    selectedCategory === "Insumos" ? "brightness-0 invert" : ""
                  }`}
                />
              </div>
              {/* Equipos Category Card */}
              <div
                onClick={() => handleCategoryClick("Equipos")}
                className={`flex w-2/5 max-w-56 aspect-square cursor-pointer flex-col items-center justify-center p-5 rounded-lg shadow-lg transition-all duration-300
                  ${
                    selectedCategory === "Equipos"
                      ? "bg-[#0069A8]"
                      : "bg-white hover:bg-gray-50"
                  }`}
              >
                <Image
                  src="/assets/images/equipos.webp"
                  alt="Equipos Icon"
                  width={500}
                  height={500}
                  className={`w-full h-full object-contain ${
                    selectedCategory === "Equipos" ? "brightness-0 invert" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conditionally Rendered Products Grid */}
        {selectedCategory && (
          <section
            id={selectedCategory?.toLowerCase()}
            className="pb-10 scroll-mt-10"
          >
            <div className="mx-auto px-4 container">
              <div className="relative gap-4 mx-auto">
                {/* BACK BUTTON: Shows only when viewing LIO products */}
                {selectedSubCategory === "LIO" && (
                  <button
                    onClick={() => setSelectedSubCategory(null)}
                    className="top-0 left-0 absolute flex items-center gap-2 hover:bg-sky-100 px-3 py-1 rounded-md text-[#0069A8] transition-colors -translate-y-10 cursor-pointer"
                  >
                    <ArrowLeft size={18} />
                    Volver a Categorías
                  </button>
                )}
              </div>

              <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* LOGIC FOR RENDERING THE CORRECT GRID */}

                {/* VIEW 1: Main 'Insumos' view */}
                {selectedCategory === "Insumos" && !selectedSubCategory && (
                  <>
                    {/* Special Card to enter the LIO sub-category */}
                    <div
                      onClick={() => setSelectedSubCategory("LIO")}
                      className="group flex flex-col justify-center items-center gap-2 bg-white hover:bg-[#0069A8] hover:shadow-xl p-4 border border-gray-200 hover:border-sky-500 rounded-lg aspect-square text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src="/assets/icons/productos/lente_intraocular.png"
                          alt="Lente Intraocular"
                          fill
                          className="group-hover:brightness-0 group-hover:invert object-contain transition-all duration-300"
                        />
                      </div>
                    </div>
                    {/* The rest of the 'Insumos' (Includes Visual & Standard items) */}
                    {generalInsumos.map((product) => (
                      <div
                        key={product.name}
                        onClick={() => openModal(product)}
                        className="group flex flex-col justify-center items-center gap-2 bg-white hover:bg-[#0069A8] hover:shadow-xl p-4 border border-gray-200 hover:border-sky-500 rounded-lg aspect-square text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={product.icon}
                            alt={product.name}
                            fill
                            className="group-hover:brightness-0 group-hover:invert object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* VIEW 2: 'LIO' sub-category view */}
                {selectedSubCategory === "LIO" &&
                  lioProducts.map((product) => (
                    <div
                      key={product.name}
                      onClick={() => openModal(product)}
                      className="group flex flex-col justify-center items-center gap-2 bg-white hover:bg-[#0069A8] hover:shadow-xl p-4 border border-gray-200 hover:border-sky-500 rounded-lg aspect-square text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={product.icon}
                          alt={product.name}
                          fill
                          className="group-hover:brightness-0 group-hover:invert object-contain"
                        />
                      </div>
                    </div>
                  ))}

                {/* VIEW 3: Main 'Equipos' view */}
                {selectedCategory === "Equipos" &&
                  equiposProducts.map((product) => (
                    <div
                      key={product.name}
                      onClick={() => openModal(product)}
                      className="group flex flex-col justify-center items-center gap-2 bg-white hover:bg-[#0069A8] hover:shadow-xl p-4 border border-gray-200 hover:border-sky-500 rounded-lg aspect-square text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={product.icon}
                          alt={product.name}
                          fill
                          className="group-hover:brightness-0 group-hover:invert object-contain"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* The Modal Component */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </>
  );
}
