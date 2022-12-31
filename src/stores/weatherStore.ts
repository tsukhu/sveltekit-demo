import { writable } from 'svelte/store';

const city = writable<{
	loading?: boolean;
	result: unknown;
}>({
	loading: false,
	result: null
});

export default {
	subscribe: city.subscribe,
	update: city.update,
	set: city.set
};
