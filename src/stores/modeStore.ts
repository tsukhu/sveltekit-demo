import { writable } from 'svelte/store';

const darkMode = writable<boolean>(false);

export default {
	subscribe: darkMode.subscribe,
	set: darkMode.set,
    update: darkMode.update,
};
