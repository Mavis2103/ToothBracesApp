import React, {FC} from 'react';
import ScanCameraContainer from './containers/ScanCamera';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NoBottomStackParamList} from '../../routes/index.NoBottom';

type Props = NativeStackScreenProps<NoBottomStackParamList, 'ScanScreen'>;

const ScanScreen: FC<Props> = () => {
  return <ScanCameraContainer />;
};

export default ScanScreen;
