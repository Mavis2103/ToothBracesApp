import {View} from 'react-native';
import React from 'react';
import {Button, Text} from '@ui-kitten/components';

const DoctorComponent = () => {
  return (
    <View>
      <Text category="h6">Your Doctor</Text>
      <Text category="s1">Dc. Ostapchuk Yurii Maksimovich</Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Button style={{flex: 0.6, marginRight: 20}}>Send Email</Button>
        <Button style={{flex: 1}}>(613) 592-7679</Button>
      </View>
    </View>
  );
};

export default DoctorComponent;
