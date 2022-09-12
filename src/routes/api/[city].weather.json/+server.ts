import { request, gql } from 'graphql-request';
import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
const query = gql`
	query WeatherQuery($name: String!) {
		getCityByName(name: $name) {
			id
			name
			weather {
				summary {
					icon
					description
					title
				}
				temperature {
					actual
					feelsLike
					min
					max
				}
			}
		}
	}
`;
const endpoint = 'https://graphql-weather-api.herokuapp.com/';

const getWeatherForCity = async (city: string) => {
	if (!city) return null;
	const { getCityByName } = await request(endpoint, query, {
		name: `${city}`
	});
	return {
		weather: getCityByName,
		error: false
	};
};

export const GET: RequestHandler = async (event) => {
	/* 	if (!event.locals['isLoggedIn']) {
		return new Response(undefined, { status: 401 });
	} */

	const { city } = event.params;
	let error = false;
	const data: any = await getWeatherForCity(city).catch(() => (error = true));
	if (data.weather !== null) {
		return json$1({
			data: data.weather
		});
	} else {
		return json$1({
			data: null,
			error
		});
	}
};
