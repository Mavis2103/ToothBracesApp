import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {storage} from '../../app/storage';

export const mmkv = {
  setUser: (data: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>) => {
    storage.set(
      'user',
      JSON.stringify({
        id: data.docs[0].id,
        // data: data.docs[0].data,
        metadata: data.docs[0].metadata,
        // ref: data.docs[0].ref,
      }),
    );
  },
  getUser: () => JSON.parse(storage.getString('user') as string),
};
