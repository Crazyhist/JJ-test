import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	base: '/JJ-test/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
