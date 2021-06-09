import {
	FIREBASE_API_KEY,
	FIREBASE_APP_ID,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET
} from '$lib/Env';
import { browser } from '$app/env';
import { getApps, getApp, initializeApp } from '@firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import type { FirebaseOptions } from '@firebase/app';
import type { Auth, UserCredential } from '@firebase/auth';

const config: FirebaseOptions = {
	apiKey: FIREBASE_API_KEY as string,
	authDomain: FIREBASE_AUTH_DOMAIN as string,
	projectId: FIREBASE_PROJECT_ID as string,
	storageBucket: FIREBASE_STORAGE_BUCKET as string,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID as string,
	appId: FIREBASE_APP_ID as string
};

if (browser && !getApps().length) {
	initializeApp(config);
}

export const getAppAuth = (): Auth => {
	return getAuth(getApp());
};
export const googleProvider = new GoogleAuthProvider();

export const signIn = (): Promise<UserCredential> => {
	if (browser) {
		return signInWithPopup(getAppAuth(), googleProvider);
	} else {
		return;
	}
};
