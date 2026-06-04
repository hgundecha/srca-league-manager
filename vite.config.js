import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/srca-league-manager/' // 👈 Replace 'srca-league-manager' with your EXACT GitHub repository name!
})
