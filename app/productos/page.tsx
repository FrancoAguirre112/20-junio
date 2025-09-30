"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { PRODUCT_DATA } from "@/lib/product-data";
import { Product } from "@/types/index";
import ProductModal from "@/components/ProductModal";
import { ArrowLeft } from "lucide-react";

export default function ProductosPage() {
  // State for the main category ('Insumos' or 'Equipos')
  const [selectedCategory, setSelectedCategory] = useState<
    "Insumos" | "Equipos" | null
  >(null);

  // NEW: State for the sub-category view ('LIO')
  const [selectedSubCategory, setSelectedSubCategory] = useState<"LIO" | null>(
    null
  );

  // States for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCategoryClick = (category: "Insumos" | "Equipos") => {
    setSelectedCategory((prev) => (prev === category ? null : category));
    // When changing main category, always reset the sub-category view
    setSelectedSubCategory(null);
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Memoized lists for better performance
  const generalInsumos = useMemo(
    () =>
      PRODUCT_DATA.filter((p) => p.category === "Insumos" && !p.subCategory),
    []
  );

  const lioProducts = useMemo(
    () => PRODUCT_DATA.filter((p) => p.subCategory === "LIO"),
    []
  );

  const equiposProducts = useMemo(
    () => PRODUCT_DATA.filter((p) => p.category === "Equipos"),
    []
  );

  // Dynamic title for the product grid section
  const gridTitle =
    selectedSubCategory === "LIO" ? "Lentes Intraoculares" : selectedCategory;

  return (
    <>
      <main className="">
        {/* Category Selection Section with Blue Background */}
        <section className="py-20">
          <div className="mx-auto px-4 text-center container">
            <div className="flex md:flex-row flex-col justify-center items-center gap-8">
              {/* Insumos Category Card */}
              <div
                onClick={() => handleCategoryClick("Insumos")}
                className={`flex h-64 w-64 cursor-pointer flex-col items-center justify-center rounded-lg shadow-lg transition-all duration-300
                  ${selectedCategory === "Insumos" ? "bg-[#0069A8]" : "bg-white hover:bg-gray-50"}`}
              >
                <Image
                  src="/assets/images/insumos.webp"
                  alt="Insumos Icon"
                  width={120}
                  height={120}
                  className={`transition-all duration-300 ${selectedCategory === "Insumos" ? "brightness-0 invert" : ""}`}
                />
                <h3
                  className={`mt-4 text-3xl font-bold tracking-widest ${selectedCategory === "Insumos" ? "text-white" : "text-[#0069A8]"}`}
                >
                  INSUMOS
                </h3>
              </div>
              {/* Equipos Category Card */}
              <div
                onClick={() => handleCategoryClick("Equipos")}
                className={`flex h-64 w-64 cursor-pointer flex-col items-center justify-center rounded-lg shadow-lg transition-all duration-300
                  ${selectedCategory === "Equipos" ? "bg-[#0069A8]" : "bg-white hover:bg-gray-50"}`}
              >
                <Image
                  src="/assets/images/equipos.webp"
                  alt="Equipos Icon"
                  width={120}
                  height={120}
                  className={`transition-all duration-300 ${selectedCategory === "Equipos" ? "brightness-0 invert" : ""}`}
                />
                <h3
                  className={`mt-4 text-3xl font-bold tracking-widest ${selectedCategory === "Equipos" ? "text-white" : "text-[#0069A8]"}`}
                >
                  EQUIPOS
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Conditionally Rendered Products Grid */}
        {selectedCategory && (
          <section className="py-20">
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

              <div className="flex gap-4">
                {/* LOGIC FOR RENDERING THE CORRECT GRID */}

                {/* VIEW 1: Main 'Insumos' view */}
                {selectedCategory === "Insumos" && !selectedSubCategory && (
                  <>
                    {/* Special Card to enter the LIO sub-category */}
                    <div
                      onClick={() => setSelectedSubCategory("LIO")}
                      className="group flex flex-col justify-center items-center gap-2 bg-white hover:bg-[#0069A8] hover:shadow-xl p-4 border border-gray-200 hover:border-sky-500 rounded-lg w-64 aspect-square text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer"
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
                    {/* The rest of the 'Insumos' */}
                    {generalInsumos.map((product) => (
                      <div
                        key={product.name}
                        onClick={() => openModal(product)}
                        className="group flex flex-col justify-center items-center gap-2 bg-white hover:bg-[#0069A8] hover:shadow-xl p-4 border border-gray-200 hover:border-sky-500 rounded-lg w-64 aspect-square text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={product.icon}
                            alt={product.name}
                            fill
                            className="group-hover:brightness-0 group-hover:invert object-contain transition-all duration-300"
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
                      className="group flex flex-col justify-center items-center gap-2 bg-white hover:bg-[#0069A8] hover:shadow-xl p-4 border border-gray-200 hover:border-sky-500 rounded-lg w-64 aspect-square text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={product.icon}
                          alt={product.name}
                          fill
                          className="group-hover:brightness-0 group-hover:invert object-contain transition-all duration-300"
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
                      className="group flex flex-col justify-center items-center gap-2 bg-white hover:bg-[#0069A8] hover:shadow-xl p-4 border border-gray-200 hover:border-sky-500 rounded-lg w-64 aspect-square text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={product.icon}
                          alt={product.name}
                          fill
                          className="group-hover:brightness-0 group-hover:invert object-contain transition-all duration-300"
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
