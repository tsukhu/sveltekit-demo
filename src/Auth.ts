import { env } from '$env/dynamic/public';
import { browser } from '$app/environment';
import { getApps, getApp, initializeApp } from '@firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import type { FirebaseOptions } from '@firebase/app';
import type { Auth, UserCredential } from '@firebase/auth';

const config: FirebaseOptions = {
	apiKey: env.PUBLIC_FIREBASE_API_KEY as string,
	authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN as string,
	projectId: env.PUBLIC_FIREBASE_PROJECT_ID as string,
	storageBucket: env.PUBLIC_FIREBASE_STORAGE_BUCKET as string,
	messagingSenderId: env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
	appId: env.PUBLIC_FIREBASE_APP_ID as string
};

if (browser && !getApps().length) {
	initializeApp(config);
}

export const getAppAuth = (): Auth => {
	return getAuth(getApp());
};
export const googleProvider = new GoogleAuthProvider();

export const signIn = (): Promise<UserCredential | void> => {
	if (browser) {
		return signInWithPopup(getAppAuth(), googleProvider);
	} else {
		return new Promise((r) => r());
	}
};
