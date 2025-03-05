import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
    plugins: [react()],
    preview: {
      port: 5173,
      strictPort: true,
     },
     server: {
      port: 5173,
      strictPort: true,
      host: true,
      origin: "http://0.0.0.0:5173",
      allowedHosts: ['react-app-lb-1518050552.us-east-1.elb.amazonaws.com'],
     },
  };
});