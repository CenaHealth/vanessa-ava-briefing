import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';

// base: '/vanessa-ava-briefing/' for GitHub Pages project-page deploy.
// Override with VITE_BASE='/' for custom-domain or root deploy.
const base = process.env.VITE_BASE ?? '/vanessa-ava-briefing/';

export default defineConfig({
  base,
  plugins: [react(), tailwind()],
  server: { strictPort: true, port: 5180 },
});
