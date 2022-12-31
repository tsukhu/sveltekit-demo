import { writable } from 'svelte/store';

const location = writable<{
	lat: number;
	lng: number;
}>({ lat: -34.397, lng: 150.644 });

export default {
	subscribe: location.subscribe,
	set: location.set
};
