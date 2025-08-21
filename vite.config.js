import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    allowedHosts: ["5173-ivz0xpqwbezkacjojozdh-1c9d6d1e.manusvm.computer", "5173-irkhdlg33kowi29ceh5oy-219ce97c.manusvm.computer", "5174-irkhdlg33kowi29ceh5oy-219ce97c.manusvm.computer"]
  }
})

