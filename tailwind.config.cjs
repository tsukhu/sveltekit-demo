const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			...defaultTheme.fontFamily,
			sans: ['Lato', ...defaultTheme.fontFamily.sans]
		}
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active'],
		scrollbar: ['dark']
	},
	daisyui: {
		themes: ['cmyk', 'dark']
	},
	plugins: [
		// ...
		require('tailwind-scrollbar'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('daisyui')
	]
};

module.exports = config;
