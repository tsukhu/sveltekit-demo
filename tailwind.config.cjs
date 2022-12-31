/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['winter', 'dark']
	},
	plugins: [require('daisyui'), require('@tailwindcss/forms')]
};
