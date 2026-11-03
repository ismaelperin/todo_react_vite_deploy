import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //escolher entre um outro:
    //base para git hub pages:
      //base: "/todo_react_vite_deploy",
    //base para vercel:
      base: '/', // Aponta para a raiz
});
