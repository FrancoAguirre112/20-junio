import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

// Aquí puedes importar tus iconos o cualquier otro componente
// import { Icon } from './components/Icon';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Esto aplica estilos de Tailwind a todos los h2
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 pb-2 border-gray-200 border-b font-bold text-2xl md:text-3xl">
        {children}
      </h2>
    ),
    // Esto aplica estilos a todos los párrafos
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    // Esto aplica estilos a todas las listas
    ul: ({ children }) => (
      <ul className="space-y-2 mb-4 pl-4 list-disc list-inside">{children}</ul>
    ),
    // Sobrescribe el componente `a` por defecto para usar Next.js Link
    a: (props) => {
      const href = props.href || "";
      if (href.startsWith("/")) {
        return (
          <Link
            href={href}
            {...props}
            className="text-blue-600 hover:underline"
          />
        );
      }
      if (href.startsWith("#")) {
        return <a {...props} className="text-blue-600 hover:underline" />;
      }
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          className="text-blue-600 hover:underline"
        />
      );
    },

    // Aquí puedes añadir tus componentes personalizados
    // Por ejemplo, si en tu MDX escribes <MiIcon name="food" />, esto lo manejará.
    // MiIcon: Icon,

    ...components,
  };
}
