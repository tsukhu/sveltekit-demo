// this is runned on load (check svelKit doc)
export async function load({ fetch }) {
	const urls = [
		'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
	];
	const getFetchResults = async (url, type) => {
		let result;
		const headers =
			type === 'json'
				? { 'content-type': 'application/json' }
				: { 'content-type': 'text/csv;charset=UTF-8' };
		try {
			const data = await fetch(url, headers);
			result = type === 'json' ? await data.json() : await data.text();
		} catch (e) {
			console.log(e);
		}
		return result;
	};
	const dataGeo = await getFetchResults(urls[0], 'json');
	return {
		result: {
			dataGeo
		}
	};
}
