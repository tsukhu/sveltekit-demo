import type { RequestHandler } from '@sveltejs/kit';
import { json as json$1 } from '@sveltejs/kit';
import cities from 'cities.json';
export const GET: RequestHandler = async (event) => {
	const { country } = event.params;

	const result = new Promise((resolve) => {
		const filteredCities = country
			? (cities as any[]).filter((city) => city.country === country)
			: cities;
		resolve({
			cities: filteredCities as any[]
		});
	});
	return json$1(result);
};
