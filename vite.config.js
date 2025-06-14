import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My_page/', // <-- your repo name here!
  plugins: [react()],
});