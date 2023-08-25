import {View} from 'react-native';
import React from 'react';
import ScanButtonComponent from '../components/ScanButton';
import ScanHistoryComponent from '../components/ScanHistory';

const ScanContainer = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
      <ScanButtonComponent />
      <ScanHistoryComponent />
    </View>
  );
};

export default ScanContainer;
