"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Product, ProductSection } from "@/types/index"; // Adjust path as needed

// Helper component to render section content (Unchanged but included for completeness)
const ContentSection = ({ section }: { section: ProductSection }) => {
  return (
    <div className="p-4">
      <h3 className="mb-3 font-bold text-gray-900 text-xl">{section.title}</h3>
      {typeof section.content === "string" ? (
        <p className="text-gray-700 leading-relaxed">{section.content}</p>
      ) : (
        <ul className="space-y-2 ml-4 text-gray-700 list-disc">
          {section.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!product) return null;

  return (
    // Main overlay for the background dimming effect
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Modal panel - NOW FULL WIDTH and slides up from the bottom */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex h-full w-[70dvw] flex-col bg-white shadow-2xl transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        {/* --- Modal Header --- */}
        <header className="top-0 z-10 sticky flex flex-shrink-0 justify-between items-center bg-white/80 backdrop-blur-lg p-4 border-gray-200 border-b">
          <div className="w-10"></div>
          {/* <h2 className="font-bold text-gray-800 text-2xl text-center">
            {product.name}
          </h2> */}
          <button
            onClick={onClose}
            className="hover:bg-gray-200 p-2 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </header>

        {/* --- Scrollable Content Area --- */}
        <main className="flex-grow overflow-y-auto">
          {/* Centered content container for better readability */}
          <div className="space-y-6 mx-auto p-6 md:p-10">
            {/* Product Info Row */}
            <div className="flex items-center gap-5 bg-gray-50 p-4 rounded-lg">
              <div className="group flex flex-col justify-center items-center gap-2 bg-main-500 p-4 border border-gray-200 rounded-lg aspect-square text-center transition-all -translate-y-1 duration-300">
                <Image
                  src={product.icon}
                  alt={`${product.name} icon`}
                  width={200}
                  height={200}
                  className="flex-shrink-0 brightness-0 invert rounded-md"
                />
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-2xl">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-md">{product.tagline}</p>

                {/* Description */}
                {product.description && (
                  <div className="py-4">
                    <h3 className="mb-3 font-bold text-gray-900 text-xl">
                      Descripción
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Dynamic Sections */}
            {product.sections.map((section, index) => (
              <ContentSection key={index} section={section} />
            ))}

            {/* Conclusion & Slogan */}
            {product.conclusion && (
              <div className="mt-6 px-4 pt-6 border-gray-200 border-t">
                <p className="text-gray-800 italic">{product.conclusion}</p>
                {product.slogan && (
                  <p className="mt-4 font-semibold text-main-500 text-lg">
                    {product.slogan}
                  </p>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductModal;
