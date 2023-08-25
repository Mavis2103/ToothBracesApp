import {View} from 'react-native';
import React from 'react';
import {Button, Text} from '@ui-kitten/components';

const AddressComponent = () => {
  return (
    <View style={{flex: 1}}>
      <Text category="h6">Palladium {'\n'}Orthodontics</Text>
      <Text category="s1" style={{marginVertical: 15}}>
        3280 Palladium Dr #1, Kanata, Ottawa, ON K2T 0N9
      </Text>
      <Button>Get Direction</Button>
    </View>
  );
};

export default AddressComponent;
