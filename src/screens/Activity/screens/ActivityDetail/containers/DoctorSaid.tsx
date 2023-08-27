import {View} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {stylesActivityDetail} from '../index.styles';

const DoctorSaidContainer = () => {
  return (
    <View style={stylesActivityDetail.container}>
      <Text style={stylesActivityDetail.header} category="h6">
        Doctor
      </Text>
      <View style={stylesActivityDetail.body}>
        <Text category="p1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ea adipisci nemo
          reprehenderit delectus, quos, deserunt sequi eaque fugit voluptatem magnam nostrum at id?
          Odit veniam cum nostrum ad explicabo?
        </Text>
      </View>
    </View>
  );
};

export default DoctorSaidContainer;
