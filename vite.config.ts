import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const react = (await import('@vitejs/plugin-react')).default;
  return {
    plugins: [react()],
    // GitHub Pagesの公開パス（リポジトリ名）を指定します
    base: '/inner-compass/', 
    server: { port: 5173 }
  };
});