import next from "next/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    next({ routeDir: "src/app" })
  ],
  ssr: {
    noExternal: [
      "@mui/**",
    ],
  }
});
