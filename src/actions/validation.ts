import { writable } from 'svelte/store';
import { buildValidator } from './validate.js';

// Refrence https://svelte.dev/repl/54d159b954d9412c8247807125d9fe1b?version=3.12.1
export function createFieldValidator(...validators: any[]) {
	const validatorStore = writable<{
		dirty: boolean;
		valid: boolean;
		message: null;
	}>({ dirty: false, valid: false, message: null });
	const validator = buildValidator(validators);

	function action(_node: any, binding: any) {
		function validate(value: string, dirty: boolean) {
			const result = validator(value, dirty) as {
				dirty: boolean;
				valid: boolean;
				message: any;
			};
			validatorStore.set(result);
		}

		validate(binding, false);

		return {
			update(value: string) {
				validate(value, true);
			}
		};
	}

	return [
		{
			subscribe: validatorStore.subscribe,
			set: validatorStore.set,
			update: validatorStore.update
		},
		action
	];
}
