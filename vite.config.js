import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_page1/', // <-- your repo name here!
  plugins: [react()],
});