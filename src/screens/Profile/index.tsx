import React, {useRef} from 'react';
import ScreenContainer from '../../shared/containers/ScreenContainer';
import {View, Image, StyleSheet} from 'react-native';
import useAuth from '../../hooks/useAuth';
import {Avatar, Text} from '@ui-kitten/components';
import {COLORS} from '../../constants/colors';
import ItemComponent from './components/Item';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheetModalContainer, {
  CustomBottomSheetModalRef,
} from '../../shared/containers/BottomSheetModalContainer';
import GalleryContainer from './containers/Gallery';

const ProfileScreen = () => {
  const {user, onLogout} = useAuth();
  const bottomSheet = useRef<CustomBottomSheetModalRef>(null);
  const onGallery = () => {
    bottomSheet.current?.onOpen();
  };
  return (
    <ScreenContainer scrollable>
      <View style={styles.center}>
        <Avatar style={styles.avatar} size="giant" source={{uri: user?.photoURL as string}} />
        <Text category="h6" style={{marginTop: 10}}>
          {user?.displayName as string}
        </Text>
        <Text category="p1" style={{marginTop: 10}}>
          {user?.email as string}
        </Text>
      </View>
      <View style={styles.box}>
        <ItemComponent title="Gallery" iconName="folder" onPress={onGallery} />
        <ItemComponent title="Guide" iconName="book" />
        <ItemComponent title="Share" iconName="share" />
        <ItemComponent title="Help" iconName="question-mark-circle" />
        <ItemComponent title="Logout" iconName="log-out" onPress={onLogout} />
      </View>
      <BottomSheetModalProvider>
        <BottomSheetModalContainer
          ref={bottomSheet}
          startFrom={'100%'}
          initEnable={false}
          enablePanDownToClose
          enableDismissOnClose>
          <GalleryContainer />
        </BottomSheetModalContainer>
      </BottomSheetModalProvider>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  box: {
    paddingHorizontal: 20,
    paddingTop: 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
});

export default ProfileScreen;
