"use client";

import React from "react";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { Product, ProductSection } from "@/types/index";

// Helper function to parse **text** into <strong>text</strong>
const parseBoldText = (text: string) => {
  // Split the text by "**"
  const parts = text.split("**");
  return parts.map((part, index) =>
    // Odd indices (1, 3, 5...) are the parts that were inside ** **
    index % 2 === 1 ? (
      <strong key={index} className="font-bold text-gray-900">
        {part}
      </strong>
    ) : (
      // Even indices are normal text
      part
    ),
  );
};

const ContentSection = ({ section }: { section: ProductSection }) => {
  return (
    <div className="px-4 pt-2 pb-4">
      {typeof section.content === "string" ? (
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {/* Call the helper function here */}
          {parseBoldText(section.content)}
        </p>
      ) : (
        <ul className="space-y-2 ml-4 text-gray-700 list-disc">
          {section.content.map((item, index) => (
            <li key={index}>
              {/* Call it here too, in case you want bold text inside lists */}
              {parseBoldText(item)}
            </li>
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

  // 1. Group the categories that need the "Header Layout"
  const isLioOrVisual =
    product.subCategory === "LIO" || product.subCategory === "Visual";

  // 2. Specific check for Cuchilletes
  const isCuchilletes = product.name === "Cuchilletes";

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex h-full md:w-[70dvw] flex-col bg-white shadow-2xl transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <header className="top-0 z-10 sticky flex flex-shrink-0 justify-between items-center bg-white/80 backdrop-blur-lg p-4 border-gray-200 border-b">
          <div className="w-10"></div>
          <button
            onClick={onClose}
            className="hover:bg-gray-200 p-2 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </header>

        <main className="flex-grow overflow-y-auto">
          <div className="space-y-6 mx-auto p-6 md:p-10">
            {/* Product Info Row */}
            <div className="flex flex-col items-start gap-5 bg-main-500 p-4 rounded-lg">
              {/* UPDATED: Added flex-col for mobile, md:flex-row for desktop */}
              <div className="flex md:flex-row flex-col gap-5 w-full">
                {/* FIX APPLIED HERE: 
                   Added 'shrink-0' to this wrapper div. 
                   This prevents the image container from being compressed by the text column.
                */}
                <div className="flex flex-col justify-center items-center bg-white mx-auto md:mx-0 p-2 w-1/2 md:w-1/3 aspect-square shrink-0">
                  <div className="group flex flex-col justify-center items-center gap-2 bg-white p-4 border-2 border-main-500 w-full aspect-square text-center transition-all duration-300">
                    <Image
                      src={product.icon}
                      alt={`${product.name} icon`}
                      width={500}
                      height={500}
                      className="flex-shrink-0 w-full"
                    />
                  </div>
                </div>

                {/* UPDATED: Added text-center for mobile, md:text-left for desktop */}
                <div className="flex flex-col flex-1 md:text-left text-center">
                  <h3 className="font-bold text-white text-2xl">
                    {product.name}
                  </h3>
                  <p className="text-gray-100 text-md">{product.tagline}</p>

                  {/* LIO & VISUAL LAYOUT: Conclusion/Slogan beside image */}
                  {isLioOrVisual && product.conclusion && (
                    <div className="mt-4 pt-3 border-white/20 border-t">
                      <p className="text-gray-100 italic leading-snug">
                        {product.conclusion}
                      </p>
                      {product.slogan && (
                        <p className="mt-2 font-semibold text-white text-lg leading-snug">
                          {product.slogan}
                        </p>
                      )}
                    </div>
                  )}

                  {/* CUCHILLETES LAYOUT: Exact client text */}
                  {isCuchilletes && (
                    <div className="mt-4 pt-3 border-white/20 border-t text-white text-left">
                      <p className="font-bold text-lg">Beneficios para vos</p>
                      <ul className="space-y-2 mt-2 ml-4 text-sm leading-relaxed list-disc">
                        <li>
                          Mayor seguridad: los instrumentos modernos reducen al
                          mínimo los riesgos durante la cirugía.
                        </li>
                        <li>
                          Cortes precisos y delicados: la tecnología de última
                          generación permite incisiones más suaves y
                          controladas.
                        </li>
                        <li>
                          Mejores resultados clínicos: el diseño avanzado
                          asegura estabilidad y eficacia durante todo el
                          procedimiento.
                        </li>
                        <li>
                          Higiene garantizada: al ser de un solo uso, se evitan
                          riesgos de contaminación y se cuida tu salud al
                          máximo.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {product.description && (
                <div className="pt-4">
                  <p className="text-gray-100 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}
            </div>

            {product.sections && product.sections.length > 0 && (
              <Accordion.Root
                type="single"
                collapsible
                className="space-y-1 w-full"
              >
                {product.sections.map((section) => (
                  <Accordion.Item
                    key={section.title}
                    value={section.title}
                    className="border-b"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex justify-between items-center hover:bg-gray-50/50 px-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-main-500 focus-visible:ring-offset-2 w-full font-semibold text-gray-800 text-lg text-left">
                        {section.title}
                        <ChevronDown className="w-5 h-5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <ContentSection section={section} />
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            )}

            {/* STANDARD FOOTER: Hidden for LIO, Visual, and Cuchilletes */}
            {!isLioOrVisual && !isCuchilletes && product.conclusion && (
              <div className="mt-6 px-4 pt-6 border-gray-200 border-t">
                <p className="text-gray-800 italic">{product.conclusion}</p>
                {product.slogan && (
                  <p className="mt-4 font-semibold text-main-500 text-lg leading-relaxed whitespace-pre-line">
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
