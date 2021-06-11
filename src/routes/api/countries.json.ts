import countries from 'countries-list/dist/countries.min.json';
import type { EndpointOutput } from '@sveltejs/kit';
export const get = async (): Promise<EndpointOutput> => {
	return new Promise((resolve) => {
		const data = Object.entries(countries).map((data) => ({ id: data[0], name: data[1].name }));
		resolve({
			body: {
				data
			}
		});
	});
};
