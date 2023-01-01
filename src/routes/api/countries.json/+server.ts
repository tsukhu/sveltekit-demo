import countries from 'countries-list/dist/countries.min.json';
import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
export const GET: RequestHandler = async () => {
	const data = Object.entries(countries).map((data) => ({ id: data[0], name: data[1].name }));
	return json$1({
		data
	});
};
