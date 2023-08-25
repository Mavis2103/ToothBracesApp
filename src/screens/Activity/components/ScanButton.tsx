import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../../routes';

const ScanButtonComponent = () => {
  const navigation = useNavigation<RootNavigationProps>();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('NoBottomTabs', {screen: 'ScanScreen'});
      }}>
      <Text category="h1">Scan</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default ScanButtonComponent;
