import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {Text} from '@ui-kitten/components';
import {stylesActivityDetail} from '../index.styles';
import BraceItemComponent from '../components/BraceItem';
import {ActivityDetailContext} from '..';

const BracesStatusContainer = () => {
  const detail = useContext(ActivityDetailContext);
  const renderList = () => {
    const array = [];
    for (const brace in detail?.braces) {
      array.push(<BraceItemComponent {...detail?.braces?.[brace]} />);
    }
    return array.map(a => a);
  };
  return (
    <View style={stylesActivityDetail.container}>
      <Text style={stylesActivityDetail.header} category="h6">
        Braces Status
      </Text>
      <View style={[stylesActivityDetail.body, {paddingBottom: 0}]}>{renderList()}</View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BracesStatusContainer;
