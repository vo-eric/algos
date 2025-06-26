/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    // Disable lightningcss temporarily if needed
    optimizePackageImports: ["@tailwindcss/postcss"],
  },
  // Alternative: Force PostCSS 8
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
};

export default config;
