import countries from 'countries-list/dist/countries.min.json';
import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
export const GET: RequestHandler = async () => {
	const result = new Promise((resolve) => {
		const data = Object.entries(countries).map((data) => ({ id: data[0], name: data[1].name }));
		resolve({
			data
		});
	});

	return json$1(result);
};
