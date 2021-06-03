import {
	FIREBASE_API_KEY,
	FIREBASE_APP_ID,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET
} from '$lib/Env';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'firebase/app';

// Add the Firebase products that you want to use
// import { getAuth } from 'firebase/auth';

let firebaseMain = null;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function initFirebase() {
	if (firebaseMain) {
		return firebaseMain;
	}

	//	const module = await import('firebase/app');
	//	const firebase = module.default;
	//	await Promise.all([import('firebase/auth')]);

	const config = {
		apiKey: FIREBASE_API_KEY,
		authDomain: FIREBASE_AUTH_DOMAIN,
		projectId: FIREBASE_PROJECT_ID,
		storageBucket: FIREBASE_STORAGE_BUCKET,
		messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
		appId: FIREBASE_APP_ID
	};

	firebaseMain = initializeApp(config);

	return firebaseMain;
}
