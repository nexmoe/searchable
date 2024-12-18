import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/kimi.js',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        name: 'searchable-kimi',
        namespace: 'searchable',
        match: ['https://kimi.moonshot.cn/*', 'https://tongyi.aliyun.com/*', 'https://gemini.google.com/*', 'https://chatgpt.com/*'],
      },
    }),
  ],
});
