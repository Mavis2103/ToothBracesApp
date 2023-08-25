import {Dimensions} from 'react-native';
export const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
export const SIZE_PROGRESSBAR = {width: windowWidth * 0.5, height: 8};
export const SIZE_PROGRESSBAR_H = 8;
export const SIZE_CIRCULARPROGRESSBAR = windowWidth * 0.5;
export const HEIGHT_ANALYTICS_COMPONENT =
  windowHeight -
  (SIZE_CIRCULARPROGRESSBAR + 20 * 2 + SIZE_PROGRESSBAR.height + (8 * 4 + 16 * 2) + 30 * 2 + 40);
//(circular_progress + margin_V*2) + progress + (text_height*2 + margin_V*4) + container_margin_V*2 + bottom_bar
