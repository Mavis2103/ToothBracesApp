import firestore from '@react-native-firebase/firestore';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {UserModel} from '../models/User';

const usersCollection = firestore().collection('Users');

export const exist = (
  body: Omit<UserModel, 'id' | 'created_at'>,
): Promise<FirebaseFirestoreTypes.QuerySnapshot> => {
  return usersCollection.where('email', '==', body?.email).get();
};

export const register = (body: Omit<UserModel, 'id' | 'created_at'>): Promise<any> => {
  return usersCollection.add(body);
};
