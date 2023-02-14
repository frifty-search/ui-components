import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';
const { EsLinter, linterPlugin } = EsLint;
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
    plugins: [
        react(),
        tsConfigPaths(),
        linterPlugin({
            include: ['./package/src}/**/*.{ts,tsx}'],
            linters: [new EsLinter({ configEnv })],
        }),
        dts({
            include: ['package/src/components/'],
        }),
    ],
    build: {
        lib: {
            entry: resolve('package', 'src/components/index.ts'),
            name: '@friftysearch/ui-components',
            formats: ['es', 'umd'],
            fileName: (format) => `@friftysearch/ui-components/index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@mui/material', '@mui/icons-material'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': '@mui/material',
                    '@mui/icons-material': '@mui/icons-material',
                    '@mui/x-date-pickers': '@mui/x-date-pickers',
                    dayjs: 'dayjs',
                    '@mui/styled-engine': '@mui/styled-engine',
                    '@emotion/react': '@emotion/react',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
}));
