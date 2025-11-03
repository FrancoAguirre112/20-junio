"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx-components";

// This is a Client Component
export function MdxContent({ source }: { source: string }) {
  // We can safely use the hook here
  const components = useMDXComponents({});

  return (
    <div className="prose-li:my-1 max-w-none prose-a:text-blue-600 hover:prose-a:underline prose prose-lg">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
