<script lang="ts">
	import SEO from '$components/SEO.svelte';
	import { emailValidator, requiredValidator } from '$actions/validators';
	import { createFieldValidator } from '$actions/validation';
	const [validity, validate] = createFieldValidator(requiredValidator(), emailValidator());

	let email: string;
</script>

<SEO title={'Email Validator'} description={'Email Validation App'} />

<div class="flex justify-center align-middle items-center flex-col">
	<input
		class={`input input-bordered ${
			$validity.dirty && !$validity.valid ? 'input-error' : 'input-primary'
		} w-full max-w-xs`}
		type="text"
		bind:value={email}
		id="email"
		placeholder="Your Email"
		class:field-danger={!$validity.valid}
		class:field-success={$validity.valid}
		use:validate={email}
	/>
	<label class="label" for="email">
		{#if $validity.dirty && !$validity.valid}
			<span class="label-text-alt">
				INVALID - {$validity.message}
				{$validity.dirty}
			</span>
		{/if}
	</label>

	<button disabled={!$validity.valid} class="btn btn-primary">Ok, I'm ready!</button>
</div>
