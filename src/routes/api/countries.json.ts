import countries from 'countries-list/dist/countries.min.json';
export const get = async () => {
	return new Promise((resolve) => {
		const data = Object.entries(countries).map(data=> ({ id: data[0], name: data[1].name}));
		resolve({
			body: {
				data
			}
		});
	});
};
