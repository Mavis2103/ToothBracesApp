import {View, Image} from 'react-native';
import React, {useContext} from 'react';
import {Text} from '@ui-kitten/components';
import {stylesActivityDetail} from '../index.styles';
import {windowWidth} from '../../../../../constants/sizes';
import {ActivityDetailContext} from '..';

const ReportInfoContainer = () => {
  const detail = useContext(ActivityDetailContext);
  return (
    <View style={stylesActivityDetail.container}>
      <Text style={stylesActivityDetail.header} category="h6">
        Information
      </Text>
      <View style={stylesActivityDetail.body}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1}}>
            <Text category="label">Status</Text>
            <Text category="c1">{detail.status}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text category="label">Created At</Text>
            <Text category="c1">{detail.created_at}</Text>
          </View>
        </View>
        <Image
          source={{uri: detail?.image}}
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
