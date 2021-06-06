import {
	FIREBASE_API_KEY,
	FIREBASE_APP_ID,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET
} from '$lib/Env';

import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
