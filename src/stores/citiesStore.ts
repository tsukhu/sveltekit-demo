import { writable } from 'svelte/store';

const cities = writable<{
	countryCode: string;
	cities: [
		{
			country: string;
			name: string;
			lat: string;
			lng: string;
		}
	];
}>();

export default {
	subscribe: cities.subscribe,
	set: cities.set
};
