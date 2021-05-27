<!-- component -->
<!-- This is an example component -->
<div class="flex flex-row h-full">
	<!-- Sidebar -->
	<nav class="bg-gray-900 w-1/5 justify-between flex flex-col ">
		<div class="mt-10 mb-10">
			<div class="mt-10">
				<ul class="text-center align-middle items-center text-sm font-semibold">
					<li class="mb-6">
						<a href="/">
							<span class="h-5 w-5 text-gray-300 mx-auto hover:text-green-500 "> Sample 1 </span>
						</a>
					</li>
					<li class="mb-6">
						<a href="/sample2">
							<span class="h-5 w-5 text-gray-300 mx-auto hover:text-green-500 "> Sample 2 </span>
						</a>
					</li>
					<li class="mb-6">
						<a href="/">
							<span class="h-5 w-5 text-gray-300 mx-auto hover:text-green-500 "> Sample 3 </span>
						</a>
					</li>
					<li>
						<a href="/">
							<span class="h-5 w-5 text-gray-300 mx-auto hover:text-green-500 "> Sample 4 </span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<div class="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
		<slot />
	</div>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
