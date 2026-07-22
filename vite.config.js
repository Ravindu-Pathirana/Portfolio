import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to a PROJECT repo (e.g. github.com/Ravindu-Pathirana/portfolio),
// set base to '/portfolio/'. If you deploy to your USER site repo
// (Ravindu-Pathirana.github.io), keep base as '/'.
// You can also override it at build time: VITE_BASE=/portfolio/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
