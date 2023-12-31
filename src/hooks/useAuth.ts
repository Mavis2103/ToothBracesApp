import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {exist, register} from '../services/auth.service';
import {storage} from '../app/storage';
import {mmkv} from '../services/common/mmkv.service';

const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(data => {
      if (data) {
        exist({email: data?.email!})
          .then(exist_data => {
            if (exist_data.empty) {
              register({email: data?.email!})
                .then(_ => {
                  exist({email: data?.email!})
                    .then(registered_data => {
                      mmkv.setUser(registered_data);
                    })
                    .catch(error => {
                      console.log('login failed', error);
                    });
                })
                .catch(error => {
                  console.log('register failed', error);
                });
            } else {
              mmkv.setUser(exist_data);
            }
          })
          .catch(error => {
            console.log('login failed', error);
          });
      }
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
      console.log('sign in with gg');
    });
  };

  const onLogout = async () => {
    await auth().signOut();
    await GoogleSignin.signOut();
  };

  return {user, onLogin, onLogout};
};

export default useAuth;
