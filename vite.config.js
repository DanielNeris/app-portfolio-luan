import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // This allows Vite to be accessible on any IP address.
    port: 3000,        // Specify the port (optional)
  },
  plugins: [react()],
})
