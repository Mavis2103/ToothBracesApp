import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {storage} from '../app/storage';
import {mmkv} from './common/mmkv.service';

enum StatusBrace {
  WORKING = 'working',
  DONE = 'done',
  PENDING = 'outdated',
}
enum StatusReport {
  OUTDATED = 'outdated',
  DONE = 'done',
  PENDING = 'pending',
}

type Braces = {
  brace: number;
  note: string;
  status: StatusBrace;
};

type Report = {
  braces?: Braces[];
  created_at: string;
  media_path: string;
  status: StatusReport;
};

const reportsCollection = firestore().collection('Reports');

export const userAddReport = (body: Report): Promise<any> => {
  const user = mmkv.getUser();
  return reportsCollection.add({
    ...body,
    user_id: firestore().doc(`Users/${user.id}`),
  });
};

export const getMyReports = (): Promise<
  FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>
> => {
  const user = mmkv.getUser();
  return reportsCollection.where('user_id', '==', firestore().doc(`Users/${user.id}`)).get();
};
