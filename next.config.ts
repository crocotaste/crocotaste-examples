import type { NextConfig } from "next";

// GitHub Pages serves this repository under /crocotaste-examples; the Pages
// workflow passes that prefix in, so local dev still runs at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
};

export default nextConfig;
