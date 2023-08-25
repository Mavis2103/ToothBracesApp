import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, PhotoFile, VideoFile, useCameraDevices} from 'react-native-vision-camera';
import {Text} from '@ui-kitten/components';
import {useIsFocused} from '@react-navigation/native';
import {windowWidth} from '../../../constants/sizes';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheetModalContainer, {
  CustomBottomSheetModalRef,
} from '../../../shared/containers/BottomSheetModalContainer';
import ScanModalContainer from './ScanModal';

const ScanCameraContainer = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const isFocused = useIsFocused();
  const [allowed, setAllowed] = useState(false);
  const [media, setMedia] = useState<PhotoFile | VideoFile>();

  const camera = useRef<Camera>(null);
  const bottomSheet = useRef<CustomBottomSheetModalRef>(null);

  const requestPermission = async () => {
    const result = await Camera.requestCameraPermission();
    setAllowed(result === 'authorized');
  };

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(permission => {
      if (permission === 'authorized') {
        setAllowed(permission === 'authorized');
      } else {
        requestPermission();
      }
    });
  }, []);

  if (device == null) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  const handleStart = () => {
    camera.current?.takePhoto().then(photo => {
      setMedia(photo);
      bottomSheet.current?.onOpen();
    });
  };

  return allowed ? (
    <View style={StyleSheet.absoluteFill}>
      {isFocused && (
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
        />
      )}
      <BottomSheetModalProvider>
        <View style={StyleSheet.absoluteFill}>
          <TouchableOpacity style={styles.button_circle} onPress={handleStart} />
        </View>
        <BottomSheetModalContainer
          ref={bottomSheet}
          startFrom={'100%'}
          initEnable={false}
          enablePanDownToClose>
          <ScanModalContainer media={media} />
        </BottomSheetModalContainer>
      </BottomSheetModalProvider>
    </View>
  ) : (
    <View>
      <Text>Not Allowed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button_circle: {
    position: 'absolute',
    bottom: 50,
    left: windowWidth / 2,
    width: 60,
    height: 60,
    transform: [{translateX: -(60 / 2)}],
    backgroundColor: '#fff',
    borderRadius: 100,
  },
});

export default ScanCameraContainer;
