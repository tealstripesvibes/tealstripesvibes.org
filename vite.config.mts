import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import vike from 'vike/plugin';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import svgrPlugin from 'vite-plugin-svgr';
import * as path from 'path';

export default defineConfig(
  {
    define:        {
      'window.global': {},
    },
    assetsInclude: [
      '**/*.srt',
    ],
    resolve:       {
      alias: {
        '@identities': path.resolve(__dirname, './src/app/@identities'),
        '@core':       path.resolve(__dirname, './src/app/@core'),
        '@features':   path.resolve(__dirname, './src/app/@features'),
        '@services':   path.resolve(__dirname, './src/app/@services'),
        '@widgets':    path.resolve(__dirname, './src/app/@widgets'),
      },
    },
    plugins:       [
      vike({prerender: true}),
      mdx({remarkPlugins: [remarkGfm]}),
      react(),
      svgrPlugin(),
    ],
  },
);
