// import { takeLatest, put, all, call } from 'redux-saga/effects';

// import AuthActionTypes from './types';

// import {
//     signInSuccess,
//     signInFailure,
//     signOutSuccess,
//     signOutFailure,
//     signUpSuccess,
//     signUpFailure
// } from './actions';

// // import {
// //     auth,
// //     googleProvider,
// //     createUserProfileDocument,
// //     getCurrentUser
// // } from '../../firebase/firebase.utils';

// export function* getSnapshotFromUserAuth(userAuth, additionalData) {
//     try {
//         const userRef = yield call(
//             createUserProfileDocument,
//             userAuth,
//             additionalData
//         );
//         const userSnapshot = yield userRef.get();
//         yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
//     } catch (error) {
//         yield put(signInFailure(error));
//     }
// }


// export function* signInWithEmail({ payload: { email, password } }) {
//     try {
//         //Method for authenticate, implement later
//         const { user } = yield auth.signInWithEmailAndPassword(email, password);
//         yield getSnapshotFromUserAuth(user);
//     } catch (error) {
//         yield put(signInFailure(error));
//     }
// }

// export function* isUserAuthenticated() {
//     try {
//         const userAuth = yield getCurrentUser();
//         if (!userAuth) return;
//         yield getSnapshotFromUserAuth(userAuth);
//     } catch (error) {
//         yield put(signInFailure(error));
//     }
// }

// export function* signOut() {
//     try {
//         // yield auth.signOut();
//         yield put(signOutSuccess());
//     } catch (error) {
//         yield put(signOutFailure(error));
//     }
// }

// export function* signUp({ payload: { email, password, displayName } }) {
//     try {
//         //Method use to sign up, implement later
//         const { user } = yield auth.createUserWithEmailAndPassword(email, password);
//         yield put(signUpSuccess({ user, additionalData: { displayName } }));
//     } catch (error) {
//         yield put(signUpFailure(error));
//     }
// }

// export function* signInAfterSignUp({ payload: { user, additionalData } }) {
//     yield getSnapshotFromUserAuth(user, additionalData);
// }

// export function* onEmailSignInStart() {
//     yield takeLatest(AuthActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
// }

// export function* onCheckUserSession() {
//     yield takeLatest(AuthActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
// }

// export function* onSignOutStart() {
//     yield takeLatest(AuthActionTypes.SIGN_OUT_START, signOut);
// }

// export function* onSignUpStart() {
//     yield takeLatest(AuthActionTypes.SIGN_UP_START, signUp);
// }

// export function* onSignUpSuccess() {
//     yield takeLatest(AuthActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

// export function* userSagas() {
//     yield all([
//         call(onEmailSignInStart),
//         call(isUserAuthenticated),
//         call(onSignOutStart),
//         call(onSignUpStart),
//         call(onSignUpSuccess)
//     ]);
// }