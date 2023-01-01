import type { RequestHandler } from '@sveltejs/kit';
import { json as json$1 } from '@sveltejs/kit';
import cities from 'cities.json';
export const GET: RequestHandler = async (event) => {
	const { country } = event.params;

	const filteredCities = country
		? (cities as any[]).filter((city) => city.country === country)
		: cities;
	return json$1({
		cities: filteredCities as any[]
	});
};
