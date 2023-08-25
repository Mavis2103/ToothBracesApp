import {View} from 'react-native';
import React from 'react';
import {Divider, Text} from '@ui-kitten/components';

const DateComponent = () => {
  return (
    <View
      style={{
        flex: 0.7,
        backgroundColor: '#EDF5FF',
        alignSelf: 'stretch',
        marginRight: 20,
        justifyContent: 'space-between',
        borderRadius: 20,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}} category="h1">
          23
        </Text>
        <Text style={{textAlign: 'center'}} category="label">
          November
        </Text>
        <Text style={{textAlign: 'center'}} category="p2">
          Tuesday
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Divider style={{width: 60}} />
        <Text style={{textAlign: 'center', marginVertical: 15}} category="label">
          12:30
        </Text>
      </View>
    </View>
  );
};

export default DateComponent;
