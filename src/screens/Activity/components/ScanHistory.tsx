import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, Text} from '@ui-kitten/components';
import {history} from '../mocks';
import {COLORS} from '../../../constants/colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ScanHistoryModalEditContainer from '../containers/ScanHistoryModalEdit';
import {useNavigation} from '@react-navigation/native';
import {ActivityNavigationProps} from '../../../routes/index.Activity';

type ScanHistoryStatus = 'done' | 'pending' | 'outdated';
const modifiedStatusCOLORS: Record<string, string> = {
  done: COLORS.green,
  pending: COLORS.yellow,
  outdated: COLORS.red,
};
const modifiedStatusLABEL: Record<string, string> = {
  done: 'Approved',
  pending: 'Pending',
  outdated: 'Expired',
};

const ScanHistoryComponent = () => {
  const navigation = useNavigation<ActivityNavigationProps>();
  const handleItem = () => {
    navigation.navigate('ActivityScreenDetail');
  };
  return (
    <View style={{alignSelf: 'stretch', padding: 20}}>
      {history.map((h, h_index) => (
        <TouchableOpacity key={h_index} style={styles.item} onPress={handleItem}>
          <View style={styles.item_left}>
            <View
              style={[styles.icon_container, {backgroundColor: modifiedStatusCOLORS[h.status]}]}>
              <Icon
                style={styles.icon}
                name={iconStatus(h.status as ScanHistoryStatus)}
                fill="#fff"
              />
            </View>
            <View>
              <Text category="label" style={{color: modifiedStatusCOLORS[h.status]}}>
                {modifiedStatusLABEL[h.status]}
              </Text>
              <Text category="c1">{h.createdAt}</Text>
            </View>
          </View>
          {h.status === 'pending' && (
            <Icon style={styles.item_right} name="edit-outline" fill="#000" />
          )}
        </TouchableOpacity>
      ))}
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <ScanHistoryModalEditContainer />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </View>
  );
};

const iconStatus = (status: ScanHistoryStatus) => {
  switch (status) {
    case 'done':
      return 'checkmark-outline';
    case 'pending':
      return 'clock-outline';
    case 'outdated':
      return 'close-outline';
  }
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_right: {
    width: 24,
    height: 24,
  },
  icon_container: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default ScanHistoryComponent;
