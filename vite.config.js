import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the user/organization page repo `debrup416.github.io`,
// so the site lives at the domain root: https://debrup416.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
