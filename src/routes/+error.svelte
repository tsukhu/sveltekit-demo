<script>
	import { page } from '$app/stores';
</script>


<div class="bg-gradient-to-r from-purple-300 to-blue-200 rounded">
	<div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center rounded">
		<div class="bg-white shadow overflow-hidden rounded sm:rounded-lg pb-8">
			<div class="border-t border-gray-200 text-center pt-8">
				<div class="text-center justify-center align-middle items-center flex w-full"><img src="/404.png" alt="404" /></div>
				<h1 class="text-2xl md:text-6xl font-medium py-8 text-gray-700 capitalize">oops! Error Encountered</h1>
				<p class="text-xl md:text-2xl pb-8 px-12 font-medium text-gray-500">
					{$page.error.message}
				</p>
				<p class="text-xl md:text-2xl pb-8 px-12 font-medium text-gray-500">
					{$page.status}
				</p>
				<a
					href="/"
					class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
				>
					HOME
				</a>
			</div>
		</div>
	</div>
</div>
