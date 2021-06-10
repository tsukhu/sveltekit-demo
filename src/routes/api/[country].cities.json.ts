import cities from 'cities.json';
export const get = async ({ params }) => {
	const { country } = params;

	return new Promise((resolve) => {
		const filteredCities = country?(cities as any[]).filter((city) => city.country === country):cities;
		resolve({
			body: {
				cities: filteredCities
			}
		});
	});
};
