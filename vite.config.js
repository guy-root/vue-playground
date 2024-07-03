/// <reference types="vitest" />
/// <reference types="vite/client" />
import * as fs from 'fs';
import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	const serving = command === 'serve';

	return {
		build: {
			outDir: '../server/dist/fe',
			sourcemap: true,
		},
		resolve: {
			alias: {
				assets: '/src/assets',
				'@components': '/src/components',
				'@pages': '/src/pages',
				'@layouts': '/src/layouts',
				'@api': '/src/api',
				'@utils': '/src/utils',
				'@store': '/src/store',
				'@styling': '/src/styling',
			},
		},
		server: {
			open: '/',
			port: 3001,
			proxy: {
				'/api': {
					target: 'http://localhost:80',
				},
			},
		},
		plugins: [
			vue(),
		],
		test: {
			globals: true,
			environment: 'happy-dom',
			setupFiles: ['./test/setup.ts'],
			server: {
				deps: {
					inline: ['vuetify'],
				},
			},
		},
	};
});

