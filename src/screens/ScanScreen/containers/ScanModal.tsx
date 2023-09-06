import {Button, Card, Modal, Text} from '@ui-kitten/components';
import React, {FC, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';
import {nanoid} from 'nanoid/non-secure';
import {processImage} from '../../../services/camera.service';
import {File, uploadFileWithString} from '../../../services/common/firebase.service';
import {userAddReport} from '../../../services/report.service';

interface ScanModalContainerProps {
  media?: VideoFile | PhotoFile;
}

const ScanModalContainer: FC<ScanModalContainerProps> = props => {
  const {media} = props;
  const [visible, setVisible] = useState<boolean>(false);
  const onSubmit = () => {
    const file: File = {
      name: nanoid() + '.' + media?.path.match(/\.([^.]+)$/)?.[1],
      type: `image/${media?.path.match(/\.([^.]+)$/)?.[1]}`,
      uri: 'file://' + media?.path,
    };
    const formData = new FormData();
    formData.append('file', file);
    processImage(formData)
      .then(response => {
        uploadFileWithString({
          name: file.name,
          uri: response?.data,
        }).then(() => {
          userAddReport({
            created_at: new Date().toISOString(),
            media_path: file.name,
            status: 'pending',
          }).then(() => {
            setVisible(true);
          });
        });
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
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Upload Success</Text>
          <Button onPress={() => setVisible(false)}>OK</Button>
        </Card>
      </Modal>
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
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ScanModalContainer;
