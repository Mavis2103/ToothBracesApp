import {Image} from 'react-native';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {windowWidth} from '../../../constants/sizes';
import {COLORS} from '../../../constants/colors';
import {Icon} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native';

const GalleryContainer = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const onPreview = () => {
    setPreview(!preview);
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPreview}>
          <Image
            source={require('../../../assets/images/doctor.png')}
            style={styles.item}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {preview && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Image resizeMode="contain" source={require('../../../assets/images/doctor.png')} />
          <TouchableOpacity
            onPress={onPreview}
            style={{position: 'absolute', top: 0, right: 0, width: 40, height: 40, zIndex: 999}}>
            <Icon name="close-outline" fill="#000" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: (windowWidth - 20) / 4,
    height: (windowWidth - 20) / 4,
    padding: 5,
  },
});

export default GalleryContainer;
