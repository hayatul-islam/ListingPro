import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseInitializeApp from '../firebase/firebaseInitializeApp';

firebaseInitializeApp()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const handleUserRegister = (email, password, name, location, navigate) => {

        console.log(location);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const newUser = { email, displayName: name };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    setError(error.message);
                });
                // history.replace('/');


                const redirect_url = location?.state?.from || '/';
                navigate(redirect_url)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const handleUserLogin = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const redirect_url = location?.state?.from || '/';
                navigate(redirect_url)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    };


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        user,
        isLoading,
        error,
        setIsLoading,
        googleSignIn,
        handleUserRegister,
        handleUserLogin,
        logOut
    }
}
export default useFirebase;