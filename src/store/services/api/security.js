import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../firebase';

const url = 'http://127.0.0.1:8000/api';

export default {
    signIn: async ({login, password}) => {
        await signInWithEmailAndPassword(auth, login, password)
            .then((userCredential) => {
            // Signed in 
                const user = userCredential.user;

                localStorage.setItem('token', user.accessToken);
            // ...
            })
            .catch((error) => {

            });
    },
    signOut: async () => {
        signOut(auth).then(() => {
            localStorage.setItem('token', '');
            window.location = '/';
        }).catch((error) => {
            // An error happened.
        });
    },
    signUp: async ({login, password}) => {
        createUserWithEmailAndPassword(auth, login, password)
            .then(() => {
                window.location = '/';
            })
            .catch((error) => {

            });
    }
}