import { writable } from 'svelte/store';

export function validator() {
	const { subscribe, set } = writable(false);

	const action = (node: HTMLElement) => {
		function _v(e: any) {
			const value = e.target.value;
			const result =
				value &&
				!!value.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				);
			set(result);
		}
		node.addEventListener('change', _v);

		return {
			destroy: () => node.removeEventListener('change', _v)
		};
	};

	return [{ subscribe }, action];
}
