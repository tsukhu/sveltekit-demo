import { request, gql } from 'graphql-request';
import type { EndpointOutput, Request } from '@sveltejs/kit';
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

export const get = async ({ params, locals }: Request): Promise<EndpointOutput> => {
	// user must have a cookie set
	if (!locals.userid) {
		return { status: 401 };
	}

	const { city } = params;
	let error = false;
	const data: any = await getWeatherForCity(city).catch(() => (error = true));
	if (data.weather !== null) {
		return {
			body: {
				data: data.weather
			}
		};
	} else {
		return {
			body: {
				data: null,
				error
			}
		};
	}
};
