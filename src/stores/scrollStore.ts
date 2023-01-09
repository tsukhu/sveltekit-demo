import { writable } from 'svelte/store';

const scrollY = writable<number>(0);

export default {
	subscribe: scrollY.subscribe,
	set: scrollY.set,
	update: scrollY.update
};
