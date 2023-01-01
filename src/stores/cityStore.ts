import { writable } from 'svelte/store';

const city = writable<{
	id: string;
	name: string;
} | null>();

export default {
	subscribe: city.subscribe,
	set: city.set
};
