<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import Tooltip from '$lib/Tooltip.svelte';
	import { tooltip } from '../actions/tooltip';
	import { getAppAuth, signIn } from '$lib/Auth';
	import authStore from '../stores/authStore';
	let showProfile = false;
	const routes = [
		{ href: '/', name: 'Todo App', tooltip: 'Todo' },
		{ href: '/loan', name: 'Loan App', tooltip: 'Loan' },
		{ href: '/store-one', name: 'Counter Store', tooltip: 'Counter with Store' },
		{ href: '/album', name: 'Photos', tooltip: 'Photos App' },
		{ href: '/modal', name: 'Modal', tooltip: 'Modal Dialog' },
		{ href: '/email', name: 'Validator', tooltip: 'Email Action' },
		{ href: '/posts', name: 'Posts', tooltip: 'Blog Posts' }
	];
	$: browser?console.log(getAppAuth().currentUser):console.log('on server');

	onMount(() => {
		if (browser){
		getAppAuth().onAuthStateChanged((user) => {
			authStore.set({
				isLoggedIn: user !== null,
				user,
				firebaseControlled: true
			});
		});
	}
	});
</script>

<!-- component -->
<!-- This is an example component -->
<div class="flex flex-col h-screen justify-between">
	<div class="flex flex-row flex-1">
		<!-- Sidebar -->
		<nav class="bg-gray-900 w-2/12 justify-between flex flex-col h-full">
			<div class="mt-10 mb-10">
				<div class="mt-10">
					<ul
						class="flex flex-col flex-wrap align-middle items-left text-sm font-semibold justify-around mx-2"
					>
						{#each routes as route}
							<li
								class="mb-4 text-center relative "
								use:tooltip={{ content: Tooltip, text: route.tooltip }}
							>
								<a href={route.href}>
									<div
										class={`text-xs md:text-sm px-0 sm:px-4 py-1 rounded ${
											route.href === $page.path
												? 'bg-green-500 hover:bg-green-700 text-white'
												: 'bg-gray-800 hover:text-green-500 text-gray-400'
										}`}
									>
										{route.name}
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</nav>
		<div class="flex-1 flex flex-col">
			<div class="flex items-center justify-between flex-wrap bg-teal p-2">
				<div class="flex items-center flex-no-shrink text-white flex-1 justify-between mr-6">
					<div class="flex">
						<svg
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 98.1 118"
							style="enable-background:new 0 0 98.1 118;"
							xml:space="preserve"
							height="30px"
							width="30px"
						>
							<style type="text/css">
								.st0 {
									fill: #ff3e00;
								}
								.st1 {
									fill: #ffffff;
								}
							</style>
							<path
								class="st0"
								d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
	c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
	c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"
							/>
							<path
								class="st1"
								d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
	c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
	c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
	c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
	c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
	c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
	c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
	c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"
							/>
						</svg>
						<span class="font-semibold tracking-tight text-gray-700 p-2">SvelteKit Experiments</span
						>
					</div>
					<!-- Profile dropdown -->
					<div class="ml-3 relative hidden md:block">
						{#if $authStore.isLoggedIn}
							<div class="flex justify-end align-middle items-center">
								<p class="text-xs text-gray-700 mx-1">{$authStore.user.displayName}</p>
								<button
									type="button"
									class="max-w-xs bg-gray-800 border-0 rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
									on:click={() => (showProfile = !showProfile)}
								>
									<span class="sr-only">Open user menu</span>

									<img
										class="h-8 w-8 rounded-full"
										src={`https://ui-avatars.com/api/?font-size=0.33&background=ff3e00&color=fff&name=${$authStore.user.displayName}`}
										alt={$authStore.user.displayName}
									/>
								</button>
							</div>
						{:else}
							<div>
								<button
									type="button"
									class="max-w-xs bg-green-200 border rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
									on:click={() => signIn()}
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6"
										><path fill="none" d="M0 0h24v24H0z" /><path
											d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"
											fill="#000"
										/></svg
									>
								</button>
							</div>
						{/if}
						{#if showProfile}
							<div
								class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<button
									type="button"
									class="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-2"
									on:click={async () => {
										showProfile = false;
										if (browser) {
											await getAppAuth().signOut();
										}
									}}
								>
									<div class="flex align-middle text-center items-center w-full ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
											/>
										</svg>
										<div class="mx-1">Sign out</div>
									</div>
								</button>
							</div>
						{/if}
					</div>
					{#if $authStore.isLoggedIn}
						<div class="-mr-2 flex md:hidden">
							<!-- Mobile menu button -->
							<button
								type="button"
								class="bg-gray-800 relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
								on:click={() => (showProfile = !showProfile)}
							>
								<span class="sr-only">Open main menu</span>
								<!--
							Heroicon name: outline/menu
			  
							Menu open: "hidden", Menu closed: "block"
						  -->
								<svg
									class="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<!--
							Heroicon name: outline/x
			  
							Menu open: "block", Menu closed: "hidden"
						  -->
								<svg
									class="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					{:else}
						<div class="-mr-2 flex md:hidden">
							<button
								type="button"
								class="max-w-xs bg-green-200 border rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
								on:click={() => signIn()}
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6"
									><path fill="none" d="M0 0h24v24H0z" /><path
										d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"
										fill="#000"
									/></svg
								>
							</button>
						</div>
					{/if}
				</div>
			</div>
			<!-- Mobile menu, show/hide based on menu state. -->
			{#if showProfile}
				<div class="md:hidden" id="mobile-menu">
					<div class="pt-4 pb-3 border-gray-700 ">
						<div class="mt-1 px-2 space-y-1">
							<button
								type="button"
								class="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full"
								on:click={async () => {
									showProfile = false;
									if (browser) {
									await getAppAuth().signOut();
									}
								}}
							>
								<div class="flex align-middle text-center items-center w-full ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
									<div class="mx-1">Sign out</div>
								</div>
							</button>
						</div>
					</div>
				</div>
			{/if}
			<div class="flex-1 py-6 sm:px-6 lg:px-8 bg-gray-200 ">
				<div class="px-2 py-2 sm:px-0 flex flex-col h-full">
					<div class="border-2 border-dashed border-purple-300 bg-white rounded-lg flex-1 p-2">
						<slot />
					</div>
				</div>
			</div>
			<footer
				class="p-2 bg-white flex text-gray-600 text-xs align-middle items-center justify-between shadow-sm border-t border-gray-100"
			>
				<div>tsukhu@github</div>
				<div>Powered by SvelteKit</div>
			</footer>
		</div>
	</div>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
