import React from 'react';
import ScreenContainer from '../../shared/containers/ScreenContainer';
import Analystic from './containers/Analystic';
import Modal from './containers/Modal';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const HomeScreen = (): React.ReactElement => {
  return (
    <ScreenContainer>
      <BottomSheetModalProvider>
        <Analystic />
        <Modal />
      </BottomSheetModalProvider>
    </ScreenContainer>
  );
};

export default HomeScreen;
