/**
 * Defines the structure for a product section, which includes a title and its content.
 * The content can be a single paragraph (string) or a list of points (string[]).
 */
export interface ProductSection {
  title: string;
  content: string | string[];
}

/**
 * Defines the structure for a product, containing all its descriptive information.
 */
export interface Product {
  name: string;
  icon: string;
  tagline: string;
  description?: string;
  sections: ProductSection[];
  category: "Insumos" | "Equipos";
  conclusion?: string;
  subCategory?: "LIO" | "Visual";
  slogan?: string;
}

// /types/blog.ts

import type { ReactElement } from "react";

export type BlogSection = {
  id?: string;
  title: string;
  content: ReactElement;
};

// MODIFIED: Added the optional 'sectionIds' property.
export type BlogPost = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  sections: BlogSection[];
  sectionIds?: string[];
};
