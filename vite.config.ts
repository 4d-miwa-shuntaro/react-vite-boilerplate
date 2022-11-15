import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': `${__dirname}/src/`
    }
  },
  server: {
    port: 3000
  },
  plugins: [react()]
})
