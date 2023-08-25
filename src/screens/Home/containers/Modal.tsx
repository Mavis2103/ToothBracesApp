import React from 'react';
import BottomSheetModalContainer from '../../../shared/containers/BottomSheetModalContainer';
import {View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import DateComponent from '../components/Date';
import AddressComponent from '../components/Address';
import DoctorComponent from '../components/Doctor';
import TimelineComponent from '../components/Timeline';
import {HEIGHT_ANALYTICS_COMPONENT} from '../constants';

const Modal = () => {
  return (
    <BottomSheetModalContainer
      startFrom={HEIGHT_ANALYTICS_COMPONENT}
      initEnable
      enablePanDownToClose={false}>
      <BottomSheetView style={{marginTop: 16}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View>
            <Text category="h6">Next appointment</Text>
            <Text category="s1">Keep track on your schedule</Text>
          </View>
          <Button>in 15 days</Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <DateComponent />
          <AddressComponent />
        </View>
        <DoctorComponent />
        <TimelineComponent />
      </BottomSheetView>
    </BottomSheetModalContainer>
  );
};

export default Modal;
