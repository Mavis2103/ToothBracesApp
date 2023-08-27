import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {stylesActivityDetail} from '../index.styles';
import BraceItemComponent from '../components/BraceItem';

const BracesStatusContainer = () => {
  return (
    <View style={stylesActivityDetail.container}>
      <Text style={stylesActivityDetail.header} category="h6">
        Braces Status
      </Text>
      <View style={[stylesActivityDetail.body, {paddingBottom: 0}]}>
        <BraceItemComponent />
        <BraceItemComponent />
        <BraceItemComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BracesStatusContainer;
