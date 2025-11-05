import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'], // Just the Babel plugin here
      },
    }),
    tailwindcss(), // Tailwind as a separate Vite plugin
  ],
})