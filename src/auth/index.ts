import {
	FIREBASE_API_KEY,
	FIREBASE_APP_ID,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET
} from '$lib/Env';
import { browser } from '$app/env';

const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID
};

let firebase = null;

export const init = async () => {
	if (browser) {
		if (!firebase) {
			const module = await import('firebase/app');
			await import('firebase/auth');

			firebase = module.default;

			firebase.initializeApp(firebaseConfig);
		}
	}
};
