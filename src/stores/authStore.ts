import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

const authStore = writable<{
	isLoggedIn: boolean;
	user?: User;
	firebaseControlled: boolean;
}>({
	isLoggedIn: false,
	firebaseControlled: false
});

export default {
	subscribe: authStore.subscribe,
	set: authStore.set
};
