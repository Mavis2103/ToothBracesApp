import React from 'react';
import ScreenContainer from '../../shared/containers/ScreenContainer';
import Analystic from './containers/Analystic';
import Modal from './containers/Modal';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const HomeScreen = (): React.ReactElement => {
  return (
    <ScreenContainer style={{backgroundColor: '#EDF5FF'}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <Analystic />
          <Modal />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ScreenContainer>
  );
};

export default HomeScreen;
