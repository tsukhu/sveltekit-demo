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

<div class="flex flex-col">
	<label for="loan" class="text-gray-700 dark:text-gray-100 text-sm font-bold">Loan Amount</label>
	<input id="loan" type="number" bind:value={loanAmount} class="rounded border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200" />

	<label for="interest" class="text-gray-700 dark:text-gray-100  text-sm font-bold">Interest Rate</label>
	<input id="interest" type="number" bind:value={interestRate} class="rounded border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200" />

	<label for="years" class="text-gray-700 dark:text-gray-100  text-sm font-bold">Years</label>
	<input id="years" type="number" bind:value={years} class="rounded border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200" />

	<div class="text-gray-700 dark:text-gray-100 text-sm font-bold mt-2 flex">
		Monthly Payment: <div class="text-blue-500 dark:text-blue-200 ml-1">${payment.toFixed(2)}</div>
	</div>
</div>
