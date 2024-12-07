/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: {
					light: '#3C4556',
					dark: '#262B34',
				},
				primary: '#FFE500',
				webbox: '#bad369'
			},
		},
		screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1104px',
            'xl': '144rem',
            '2xl': '1600px',
            '3xl': '2200px',
            'short': { 'raw': '(max-height: 800px) and (min-width: 640px)' },
            'lgDown': { 'raw': '(max-width: 1058px)' },
            '1080': { 'raw': '(min-height: 1080px)' },
        },
	},
	plugins: [],
}
