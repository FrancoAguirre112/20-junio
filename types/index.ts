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
  subCategory?: "LIO";
  slogan?: string;
}
