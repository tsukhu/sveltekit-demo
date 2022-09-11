import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies.userid || uuid();

	// TODO https://github.com/sveltejs/kit/issues/1046
	if (event.url.searchParams.has('_method')) {
		event.method = event.url.searchParams.get('_method').toUpperCase();
	}

	const response = await resolve(event);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set('set-cookie', `userid=${event.locals.userid}; Path=/; HttpOnly`);
	}

	return response;
};
