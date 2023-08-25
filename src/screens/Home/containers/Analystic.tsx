import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CircularProgressBar, ProgressBar, Text} from '@ui-kitten/components';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {SIZE_CIRCULARPROGRESSBAR, SIZE_PROGRESSBAR} from '../constants';

const Analystic = () => {
  return (
    <View style={styles.center} onLayout={e => console.log('ref', e.nativeEvent.layout.height)}>
      <CircularProgressBar
        style={{
          height: SIZE_CIRCULARPROGRESSBAR,
          width: SIZE_CIRCULARPROGRESSBAR,
          marginVertical: 20,
        }}
        onLayout={e => console.log('ref', e.nativeEvent.layout.height)}
        progress={0.2}
        renderIcon={() => (
          <Text style={{textAlign: 'center'}}>
            <Text category="c1">Wearing braces {'\n'}</Text>
            <Text category="h6">1 year 6 months {'\n'}12 days</Text>
          </Text>
        )}
      />
      <Text
        style={{marginVertical: 8}}
        category="label"
        onLayout={e => console.log('ref', e.nativeEvent.layout.height)}>
        8 months 2 days
      </Text>
      <ProgressBar
        style={{width: SIZE_PROGRESSBAR.width, height: SIZE_PROGRESSBAR.height}}
        progress={0.1}
      />
      <Text
        style={{marginVertical: 8}}
        category="c1"
        onLayout={e => console.log('ref', e.nativeEvent.layout.height)}>
        Finish wearing braces
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Analystic;
