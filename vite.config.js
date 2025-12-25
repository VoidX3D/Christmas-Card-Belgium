import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    [react()],
    ViteFaviconsPlugin('./public/favicon.svg') // or use SVG
  ]
})