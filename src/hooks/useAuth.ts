import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(data => {
      setUser(data);
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber;
  }, []);

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const onLogin = () => {
    onGoogleButtonPress().then(() => {
      console.log('signed in with google');
    });
  };

  const onLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return {user, onLogin, onLogout};
};

export default useAuth;
