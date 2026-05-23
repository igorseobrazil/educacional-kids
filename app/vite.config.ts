import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('firebase')) return 'firebase'
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'react'
          if (id.includes('ts-fsrs')) return 'fsrs'
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
