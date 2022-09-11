<script lang="ts">
	import { page } from '$app/stores';
	import Tooltip from '$lib/Tooltip.svelte';
	import { tooltip } from '$actions/tooltip';
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
		{ href: '/form-builder', name: 'Form Builder', tooltip: 'Form Builder' },
	];
</script>

<!-- Sidebar -->
<nav class="bg-gray-900 w-2/12 justify-between flex flex-col h-full">
	<div class="mt-5 mb-5">
		<div class="mt-10">
			<ul
				class="flex flex-col flex-wrap align-middle items-left text-sm font-semibold justify-around mx-2"
			>
				{#each routes as route}
					<li
						class="mb-4 text-center relative cursor-pointer"
						use:tooltip={{ content: Tooltip, text: route.tooltip }}
					>
						<a data-sveltekit-prefetch href={route.href}>
							<div
								class={`text-xs md:text-sm px-0 sm:px-4 py-1 rounded ${
									route.href === $page.url.pathname
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
