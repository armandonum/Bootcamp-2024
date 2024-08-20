import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'
const manifesForPlugin = {
  "name": "React PWA",
  "short_name": "React PWA",
  "start_url": "/",
  "display": undefined, // or change it to a valid value like 'fullscreen'
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ manifest: manifesForPlugin })],
  server: {
    port: 3000
  }
})
