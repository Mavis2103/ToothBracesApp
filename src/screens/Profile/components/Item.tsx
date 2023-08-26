import {View, StyleSheet, TouchableOpacity, GestureResponderEvent} from 'react-native';
import React, {FC} from 'react';
import {Icon, Text} from '@ui-kitten/components';
import {COLORS} from '../../../constants/colors';

interface ItemComponentProps {
  title: string;
  iconName: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const ItemComponent: FC<ItemComponentProps> = ({title, iconName, onPress}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.icon_container}>
        <Icon name={iconName} style={styles.icon} fill="#000" />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    // height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom: 20,
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  icon_container: {
    width: 50,
    height: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
    borderRadius: 10,
  },
});

export default ItemComponent;
