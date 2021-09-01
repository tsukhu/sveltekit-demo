<script lang="ts">
	import SEO from '$lib/SEO.svelte';
	import Input from '$lib/forms/Input.svelte';
	import SelectBox from '$lib/forms/SelectBox.svelte';
	import FormButton from '$lib/forms/FormButton.svelte';
	import FormInput from '$lib/forms/FormInput.svelte';
	import { ButtonType, InputType } from '$lib/forms/InputType';

	const generateForm = (cb: (data) => void) => {
		let formValues = {};
		return {
			getFormValues: () => formValues,
			changeHandler: (e, name) =>
				(formValues = {
					...formValues,
					[name]: e.detail.value
				}),
			submitHandler: () => {
				console.log(formValues);
				cb(formValues);
			},
			buttons: [
				{ label: 'Submit', type: ButtonType.submit },
				{ label: 'Reset', type: ButtonType.reset },
				{ label: 'Cancel', type: ButtonType.button, clickHandler: () => console.log('Cancel') }
			],
			fields: [
				{
					id: 'email',
					name: 'email',
					schema: {
						component: Input,
						props: {
							label: 'Email',
							type: InputType.email,
							placeholder: 'Enter your email'
						}
					}
				},
				{
					id: 'password',
					name: 'password',
					schema: {
						component: Input,
						props: {
							label: 'Password',
							type: InputType.password,
							placeholder: 'Enter your password'
						}
					}
				},
				{
					id: 'dob',
					name: 'dob',
					schema: {
						component: Input,
						props: {
							label: 'Date of Birth',
							type: InputType.date,
							placeholder: 'Enter your Date Of Birth'
						}
					}
				},
				{
					id: 'options',
					name: 'options',
					schema: {
						component: SelectBox,
						props: {
							type: InputType.select,
							label: 'Options',
							options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
							multiple: true,
							placeholder: 'Select your options'
						}
					}
				}
			]
		};
	};

	let formValues = {};
	const setFormValues = (data) => (formValues = data);
	let loginForm = generateForm(setFormValues);
</script>

<SEO title={'Form Builder'} description={'Form Builder App'} />

<div class="flex justify-center align-middle items-center">
	<div
		class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-700 flex flex-col w-full"
	>
		<div class="antialiased text-gray-900 px-6">
			<div class="mx-auto m-2 text-sm">
				<h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">Dynamic Form</h2>
				<p class="mt-2 text-lg text-gray-500 dark:text-gray-100">API Based Forms</p>
				<form on:submit|preventDefault={loginForm.submitHandler}>
					{#each loginForm.fields as { schema, name, id } (id)}
						<FormInput
							component={schema.component}
							props={schema.props}
							on:inputChange={(e) => loginForm.changeHandler(e, name)}
						/>
					{/each}
					<div class="px-4 py-3 text-right sm:px-6 flex gap-2 justify-end dark:bg-gray-600">
						{#each loginForm.buttons as { label, type, clickHandler } (label)}
							<FormButton props={{ type, clickHandler, label }} />
						{/each}
					</div>
				</form>
			</div>
			<div class="max-w-4xl py-2">
				<h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">Form Output</h2>
				<p class="mt-2 text-gray-500 dark:text-gray-300 text-xs">
					{JSON.stringify(formValues, null, 2)}
				</p>
			</div>
		</div>
	</div>
</div>
