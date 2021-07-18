<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { getAppAuth } from '$lib/Auth';
	import SideBar from './SideBar.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import authStore from '$stores/authStore';
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

<div class="flex flex-col h-screen justify-between">
	<div class="flex flex-row flex-1">
		<SideBar />
		<div class="flex-1 flex flex-col">
			<Header />
			<div class="flex-1 py-6 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-600">
				<div class="px-2 py-2 sm:px-0 flex flex-col h-full">
					<div
						class="border border-gray-100 dark:border-gray-500 bg-white dark:bg-gray-500 rounded-lg flex-1 p-2 shadow"
					>
						<slot />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</div>
</div>
