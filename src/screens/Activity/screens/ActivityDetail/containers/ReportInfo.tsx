import {View, Image} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {stylesActivityDetail} from '../index.styles';
import {windowWidth} from '../../../../../constants/sizes';

const ReportInfoContainer = () => {
  return (
    <View style={stylesActivityDetail.container}>
      <Text style={stylesActivityDetail.header} category="h6">
        Information
      </Text>
      <View style={stylesActivityDetail.body}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1}}>
            <Text category="label">Status</Text>
            <Text category="c1">Done</Text>
          </View>
          <View style={{flex: 1}}>
            <Text category="label">Created At</Text>
            <Text category="c1">20/02/2023 13:42</Text>
          </View>
        </View>
        <Image
          source={require('../../../../../assets/images/test.png')}
          resizeMode="contain"
          style={{
            width: windowWidth - (15 * 2 + 5 * 2),
            height: windowWidth - (15 * 2 + 5 * 2),
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

export default ReportInfoContainer;
