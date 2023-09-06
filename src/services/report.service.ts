import firestore from '@react-native-firebase/firestore';
import {storage} from '../app/storage';

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
  return reportsCollection.add({
    ...body,
    user_id: firestore().doc(`Users/${JSON.parse(storage.getString('user') as string)?.id}`),
  });
};
