
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// export default defineConfig(({ mode }) => ({
//   base: mode === "production" ? "/my-portfolio/" : "/",
//   // base: "",   // FIXED for local dev

//   server: {
//     host: "::",
//     port: 8080,
//   },

//   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

export default defineConfig({
  base: "/my-portfolio/",
  plugins: [react()],
});
