import cities from 'cities.json';
import type { EndpointOutput, Request } from '@sveltejs/kit';
export const get = async ({ params }: Request): Promise<EndpointOutput> => {
	const { country } = params;

	return new Promise((resolve) => {
		const filteredCities = country
			? (cities as any[]).filter((city) => city.country === country)
			: cities;
		resolve({
			body: {
				cities: filteredCities as any[]
			}
		});
	});
};
