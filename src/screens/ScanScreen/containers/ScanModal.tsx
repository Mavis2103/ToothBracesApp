import {Button, Text} from '@ui-kitten/components';
import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';
import {nanoid} from 'nanoid/non-secure';
import {processImage} from '../../../services/camera.service';

interface ScanModalContainerProps {
  media?: VideoFile | PhotoFile;
}

const ScanModalContainer: FC<ScanModalContainerProps> = props => {
  const {media} = props;
  const onSubmit = () => {
    const formData = new FormData();
    formData.append('file', {
      name: nanoid() + '.' + media?.path.match(/\.([^.]+)$/)?.[1],
      type: `image/${media?.path.match(/\.([^.]+)$/)?.[1]}`,
      uri: 'file://' + media?.path,
    });
    processImage(formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('upload failed', error);
      });
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: 'file://' + media?.path}} style={styles.image} resizeMode="contain" />
      <Button style={{marginTop: 20}} onPress={onSubmit}>
        SEND
      </Button>
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
