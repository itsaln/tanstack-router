import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: [
			{
				find: '@/components',
				replacement: path.resolve(__dirname, 'src/components')
			},
			{
				find: '@/svg',
				replacement: path.resolve(__dirname, 'src/components/svg')
			},

			{ find: '@/api', replacement: path.resolve(__dirname, 'src/api') },
			{ find: '@/assets', replacement: path.resolve(__dirname, 'src/assets') },
			{ find: '@/config', replacement: path.resolve(__dirname, 'src/config') },
			{ find: '@/hooks', replacement: path.resolve(__dirname, 'src/hooks') },
			{ find: '@/layout', replacement: path.resolve(__dirname, 'src/layout') },
			{
				find: '@/providers',
				replacement: path.resolve(__dirname, 'src/providers')
			},
			{ find: '@/router', replacement: path.resolve(__dirname, 'src/router') },
			{
				find: '@/services',
				replacement: path.resolve(__dirname, 'src/services')
			},
			{ find: '@/shared', replacement: path.resolve(__dirname, 'src/shared') },
			{ find: '@/store', replacement: path.resolve(__dirname, 'src/store') },
			{ find: '@/utils', replacement: path.resolve(__dirname, 'src/utils') },
			{ find: '@/views', replacement: path.resolve(__dirname, 'src/views') }
		]
	}
})
