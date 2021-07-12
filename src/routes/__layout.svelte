<script lang="ts">
	import '../styles/tailwind-output.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import Tooltip from '$lib/Tooltip.svelte';
	import { tooltip } from '$actions/tooltip';
	import { getAppAuth, signIn } from '$lib/Auth';
	import authStore from '$stores/authStore';
	import modeStore from '$stores/modeStore';
	import SvelteLogoSvg from '$lib/SvelteLogoSVG.svelte';
	import AboutSvg from '$lib/AboutSVG.svelte';
	import LightModeSvg from '$lib/LightModeSVG.svelte';
	import DarkModeSvg from '$lib/DarkModeSVG.svelte';
	import SignInSvg from '$lib/SignInSVG.svelte';
	import SignOutSvg from '$lib/SignOutSVG.svelte';
	import MobileMenuBtnSvg from '$lib/MobileMenuBtnSVG.svelte';
	let showProfile = false;
	const routes = [
		{ href: '/', name: 'Todo App', tooltip: 'Todo' },
		{ href: '/loan', name: 'Loan App', tooltip: 'Loan' },
		{ href: '/store-one', name: 'Counter Store', tooltip: 'Counter with Store' },
		{ href: '/album', name: 'Photos', tooltip: 'Photos App' },
		{ href: '/modal', name: 'Modal', tooltip: 'Modal Dialog' },
		{ href: '/email', name: 'Validator', tooltip: 'Email Action' },
		{ href: '/posts', name: 'Posts', tooltip: 'Blog Posts' },
		{ href: '/weather', name: 'Weather', tooltip: 'Weather' },
		{ href: '/map', name: 'Map', tooltip: 'map' },
		{ href: '/worldmap', name: 'World Surfers', tooltip: 'D3 World Map' }
	];
	$: browser ? console.log(getAppAuth().currentUser) : console.log('on server');
	$: if (browser && $modeStore === true) {
		document.documentElement.classList.add('dark');
	} else if (browser && $modeStore === false) {
		document.documentElement.classList.remove('dark');
	}

	onMount(() => {
		if (browser) {
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
								<a sveltekit:prefetch href={route.href}>
									<div
										class={`text-xs md:text-sm px-0 sm:px-4 py-1 rounded ${
											route.href === $page.path
												? 'bg-green-700 hover:bg-green-800 text-white'
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
			<div
				class="flex items-center justify-between flex-wrap bg-gray-50 dark:bg-gray-900 dark:text-white p-2 align-middle"
			>
				<div class="flex items-center flex-no-shrink text-white flex-1 justify-start mr-6">
					<a sveltekit:prefetch href="/" class="flex flex-1"
						><SvelteLogoSvg />
						<span class="font-semibold tracking-tight text-gray-700 dark:text-gray-100 p-2"
							>SvelteKit Experiments</span
						></a
					>
					<div class="text-gray-700 dark:text-gray-100 p-2 mx-1">
						<a href="/about" aria-label="About"><AboutSvg /> </a>
					</div>
					<div class="text-gray-700 dark:text-gray-100 mt-2 mx-2">
						<button
							type="button"
							on:click={() => modeStore.update((m) => (m = !m))}
							aria-label={`${modeStore ? 'Turn on Light Mode' : 'Turn on Dark Mode'}`}
						>
							{#if $modeStore === true}
								<LightModeSvg />
							{:else}
								<DarkModeSvg />
							{/if}
						</button>
					</div>
					<!-- Profile dropdown -->
					<div class="ml-3 relative hidden md:block">
						{#if $authStore.isLoggedIn}
							<div class="flex justify-end align-middle items-center">
								<p class="text-xs text-gray-700 dark:text-gray-100 mx-1">
									{$authStore.user.displayName}
								</p>
								<button
									type="button"
									class="max-w-xs bg-gray-800 dark:bg-gray-100 border-0 rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"
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
									id="user-sign-in-sm"
									aria-expanded="false"
									aria-haspopup="true"
									aria-label="Sign In"
									on:click={() => signIn()}
								>
									<SignInSvg />
								</button>
							</div>
						{/if}
						{#if showProfile}
							<div
								class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<button
									type="button"
									class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
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
										<SignOutSvg />
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
								<MobileMenuBtnSvg />
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
								<SignInSvg />
							</button>
						</div>
					{/if}
				</div>
			</div>
			<!-- Mobile menu, show/hide based on menu state. -->
			{#if showProfile}
				<div class="md:hidden" id="mobile-menu">
					<div class="pt-4 pb-3 border-gray-700 dark:bg-gray-700">
						<div class="mt-1 px-2 space-y-1">
							<button
								type="button"
								class="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
								on:click={async () => {
									showProfile = false;
									if (browser) {
										await getAppAuth().signOut();
									}
								}}
							>
								<div class="flex align-middle text-center items-center w-full ">
									<SignOutSvg />
									<div class="mx-1">Sign out</div>
								</div>
							</button>
						</div>
					</div>
				</div>
			{/if}
			<div class="flex-1 py-6 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-600">
				<div class="px-2 py-2 sm:px-0 flex flex-col h-full">
					<div
						class="border border-gray-100 dark:border-gray-500 bg-white dark:bg-gray-500 rounded-lg flex-1 p-2 shadow"
					>
						<slot />
					</div>
				</div>
			</div>
			<footer
				class="p-2 bg-white dark:bg-gray-900 flex text-gray-600 dark:text-gray-100 text-xs align-middle items-center justify-between shadow-sm border-t border-gray-100 dark:border-gray-700"
			>
				<div>tsukhu@github</div>
				<div>Powered by SvelteKit</div>
			</footer>
		</div>
	</div>
</div>
