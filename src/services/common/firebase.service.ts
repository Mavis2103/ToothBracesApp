import storage from '@react-native-firebase/storage';
import {mmkv} from './mmkv.service';
import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export type File = {
  name: string;
  type?: string;
  uri: string;
};

export const uploadFile = (file: File) => {
  const reference = storage().ref(file.name);
  return reference.putFile(file.uri);
};

export const uploadFileWithString = (file: File) => {
  const reference = storage().ref(file.name);
  return reference.putString(file.uri, storage.StringFormat.BASE64, {
    cacheControl: 'no-store',
  });
};

export const getFile = (name: string) => {
  return storage().ref(name).getDownloadURL();
};

const reportsCollection = firestore().collection('Reports');
