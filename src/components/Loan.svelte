<script lang="ts">
	let interestRate = 3;
	let loanAmount = 200000;
	let years = 20;
	const MONTHS_PER_YEAR = 12;

	$: months = years * MONTHS_PER_YEAR;
	$: monthlyInterestRate = interestRate / 100 / MONTHS_PER_YEAR;
	$: numerator = loanAmount * monthlyInterestRate;
	$: denominator = 1 - (1 + monthlyInterestRate) ** -months;
	$: payment =
		!loanAmount || !months ? 0 : interestRate ? numerator / denominator : loanAmount / months;
</script>

<div class="flex flex-col gap-4">
	<h2 class="font-extrabold text-center align-middle text-secondary-content text-3xl p-2 mb-4">
		Loan App
	</h2>
	<label for="loan" class="text-sm font-bold">Loan Amount</label>
	<input
		id="loan"
		type="number"
		bind:value={loanAmount}
		class="input input-bordered w-full max-w-xs"
	/>

	<label for="interest" class=" text-sm font-bold">Interest Rate</label>
	<input
		id="interest"
		type="number"
		bind:value={interestRate}
		class="input input-bordered w-full max-w-xs"
	/>

	<label for="years" class="text-sm font-bold">Years</label>
	<input id="years" type="number" bind:value={years} class="input input-bordered w-full max-w-xs" />

	<div class="text-sm font-bold mt-2 flex">
		Monthly Payment: <div class="text-primary-content ml-1">${payment.toFixed(2)}</div>
	</div>
</div>
