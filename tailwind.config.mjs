/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"circular-bold": ["circular-bold"],
				"circular-light": ["circular-light"],
				"circular-medium": ["circular-medium"],
			},
		},
	},
	plugins: [
		require("tailwindcss-animated")
	],
}
