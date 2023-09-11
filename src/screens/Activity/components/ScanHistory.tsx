import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon, Text} from '@ui-kitten/components';
// import {history} from '../mocks';
import {COLORS} from '../../../constants/colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ScanHistoryModalEditContainer from '../containers/ScanHistoryModalEdit';
import {useNavigation} from '@react-navigation/native';
import {ActivityNavigationProps} from '../../../routes/index.Activity';
import {getMyReports} from '../../../services/report.service';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

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
  const [history, setHistory] =
    useState<FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>['docs']>();
  const navigation = useNavigation<ActivityNavigationProps>();
  const handleItem = (index: number) => () => {
    navigation.navigate('ActivityScreenDetail', history?.[index]?.data());
  };

  useEffect(() => {
    getMyReports().then(data => {
      setHistory(data.docs);
    });
  }, []);

  return (
    <View style={{alignSelf: 'stretch', padding: 20}}>
      {history?.map((h, h_index) => (
        <TouchableOpacity key={h_index} style={styles.item} onPress={handleItem(h_index)}>
          <View style={styles.item_left}>
            <View
              style={[
                styles.icon_container,
                {backgroundColor: modifiedStatusCOLORS[h?.data()?.status]},
              ]}>
              <Icon
                style={styles.icon}
                name={iconStatus(h?.data()?.status as ScanHistoryStatus)}
                fill="#fff"
              />
            </View>
            <View>
              <Text category="label" style={{color: modifiedStatusCOLORS[h?.data()?.status]}}>
                {modifiedStatusLABEL[h?.data()?.status]}
              </Text>
              <Text category="c1">{h?.data()?.created_at}</Text>
            </View>
          </View>
          {h?.data()?.status === 'pending' && (
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
