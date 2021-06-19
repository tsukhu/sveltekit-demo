module.exports = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};
