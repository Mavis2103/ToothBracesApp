import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';

interface BraceItemComponentProp {
  brace: number;
  status: 'working' | 'done';
  note: string;
  updated_at: string;
}

const BraceItemComponent = (props: BraceItemComponentProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.brace}>
        <Text category="label">{props.brace}</Text>
      </View>
      <View>
        <Text category="label">{props.status}</Text>
        <Text category="c2">Updated at: {props.updated_at}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
  brace: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    borderRadius: 5,
  },
});

export default BraceItemComponent;
