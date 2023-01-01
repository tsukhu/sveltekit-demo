<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { getAppAuth, signIn } from '../Auth';
	import authStore from '../stores/authStore';
	import SvelteLogoSvg from '../components/SvelteLogoSVG.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
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
		{ href: '/worldmap', name: 'World Surfers', tooltip: 'D3 World Map' },
		{ href: '/stensvelte', name: 'Stencil SSR', tooltip: 'Stencil SSR Integration' },
		{ href: '/parallax', name: 'Parallax', tooltip: 'Parallax' },
		{ href: '/form-builder', name: 'Form Builder', tooltip: 'Form Builder' }
	];

	onMount(() => {
		if (browser) {
			getAppAuth().onAuthStateChanged((user) => {
				authStore.set({
					isLoggedIn: user !== null,
					user: user ?? undefined,
					firebaseControlled: true
				});
			});
		}
	});
</script>

<div class="drawer drawer-mobile text-sm">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center relative">
		<!-- Page content here -->
		<label for="my-drawer-2" class="drawer-button btn btn-square lg:hidden absolute inset-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</label>
		<div class="flex flex-col w-full h-full items-center justify-center">
			<div class="navbar bg-base-200 flex">
				<div class="flex-1 ml-14 lg:m-0 font-semibold gap-2 text-xl text-base-content">
					<SvelteLogoSvg /> SvelteKit Experiments
				</div>
				<div class="flex-none gap-2">
					<div class="dropdown dropdown-end">
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label tabindex="0" class="btn btn-ghost btn-circle avatar">
							<div class="w-10 rounded-full">
								{#if $authStore.isLoggedIn}
									<img
										src={`https://ui-avatars.com/api/?font-size=0.33&background=ff3e00&color=fff&name=${$authStore.user?.displayName}`}
										alt={$authStore.user?.displayName}
									/>
								{:else}
									<img src="https://placeimg.com/80/80/people" alt="profile" />
								{/if}
							</div>
						</label>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
						>
							<!-- svelte-ignore a11y-missing-attribute -->
							{#if $authStore.isLoggedIn && browser}
								<li>
									<button on:click={async () => await getAppAuth().signOut()}>Logout</button>
								</li>
							{:else}
								<li><button on:click={() => signIn()}>Login</button></li>
							{/if}
							<li>
								<a href="/about"> About </a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="flex w-full h-full items-center justify-center overflow-y-auto"><slot /></div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-72 bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<div class="mt-12 space-y-2">
				{#each routes as route}
					<li>
						<a href={route.href} class:active={$page.url.pathname === route.href}>
							{route.name}
						</a>
					</li>
				{/each}
			</div>
		</ul>
	</div>
</div>
