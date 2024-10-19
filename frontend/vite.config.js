<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85

export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    host: '0.0.0.0',  
    port: 5173,       
=======
    host: "0.0.0.0",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85
  },
});
