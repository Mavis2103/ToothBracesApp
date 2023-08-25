import {Button, Text} from '@ui-kitten/components';
import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';
import {windowWidth} from '../../../constants/sizes';

interface ScanModalContainerProps {
  media?: VideoFile | PhotoFile;
}

const ScanModalContainer: FC<ScanModalContainerProps> = props => {
  const {media} = props;

  return (
    <View style={styles.container}>
      <Image source={{uri: 'file://' + media?.path}} style={styles.image} resizeMode="contain" />
      <Button style={{marginTop: 20}}>SEND</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    // width: windowWidth,
    aspectRatio: 1 / 1.75,
    borderRadius: 10,
  },
});

export default ScanModalContainer;
