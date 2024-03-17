import {Dimensions, Platform, StyleSheet} from 'react-native';

export const {width, height} = Dimensions.get('screen');
export const {width: windowWidth, height: windowHeight} =
  Dimensions.get('window');

export const isAndroid = Platform.OS === 'android' ? true : false;
export const textColor = '#261209';
export const secTextColor = '#718091';
export const gothic = 'DidactGothic';
export const juraBold = 'Jura-Bold';
export const juraRegular = 'Jura-Regular';
export const primaryColor = '#ec7a7a';
export const primaryColorShadow = '#ec7a7a4a';

export const globalStyles = {
  xs: '1%',
  s: '2%',
  m: '4%',
  l: '6%',
  xl: '8%',
  xxl: '10%',
  per100: '100%',
};

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const commonStyles = StyleSheet.create({
  ml2: {marginLeft: '2%'},
  ml3: {marginLeft: '3%'},
  mt1: {marginTop: '1%'},
  mt2: {marginTop: '2%'},
  mt3: {marginTop: '3%'},
  mt5: {marginTop: '5%'},
  mt10: {marginTop: '10%'},
  mt0: {marginTop: 0},
  mb0: {marginBottom: 0},
  mr0: {marginRight: 0},
  mr5: {marginRight: '5%'},
  mb2: {marginBottom: '2%'},
  mb1: {marginBottom: '2%'},
  my1: {marginVertical: '1%'},
  my2: {marginVertical: '2%'},
  my3: {marginVertical: '3%'},
  my5: {marginVertical: '5%'},
  mx1: {marginHorizontal: '1%'},
  mx2: {marginHorizontal: '2%'},
  mx4: {marginHorizontal: '4%'},
  mb5: {marginBottom: '5%'},
  mb3: {marginBottom: '3%'},
  ml5: {marginLeft: '5%'},
  ml10: {marginLeft: '10%'},
  m3: {margin: '3%'},
  m4: {margin: '4%'},
  m5: {margin: '5%'},
  p5: {padding: '5%'},
  p2: {padding: '2%'},
  p3: {padding: '3%'},
  pt2: {paddingTop: '2%'},
  pt3: {paddingTop: '3%'},
  pt4: {paddingTop: '4%'},
  pt6: {paddingTop: '6%'},
  pb1: {paddingBottom: '1%'},
  pb2: {paddingBottom: '2%'},
  pb3: {paddingBottom: '3%'},
  pb4: {paddingBottom: '4%'},
  pb5: {paddingBottom: '5%'},
  pt10: {paddingTop: '10%'},
  pl1: {paddingLeft: '1%'},
  pl2: {paddingLeft: '2%'},
  pl3: {paddingLeft: '3%'},
  pr0: {paddingRight: '0%'},
  pr3: {paddingRight: '3%'},
  pr2: {paddingRight: '2%'},
  pr1: {paddingRight: '1%'},
  py3: {paddingVertical: '3%'},
  py1: {paddingVertical: '1%'},
  py2: {paddingVertical: '2%'},
  py4: {paddingVertical: '4%'},
  py5: {paddingVertical: '5%'},
  flex05: {flex: 0.5},
  flex1: {flex: 1},
  flex2: {flex: 2},
  flexGrow1: {flexGrow: 1},
  px4: {paddingHorizontal: '4%'},
  px3: {paddingHorizontal: '3%'},
  px1: {paddingHorizontal: '1%'},
  px2: {paddingHorizontal: '2%'},
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  alignCenterRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    marginLeft: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  textCenter: {textAlign: 'center'},
  textUnderLine: {textDecorationLine: 'underline'},
  alignItemsCenter: {alignItems: 'center'},
  globalPaddingHorizontal: {paddingHorizontal: '5%'},
  flexWhite: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  rowCB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowFullCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    width: '100%',
    height: '100%',
  },
  w100: {width: '100%'},
  h200: {height: 200},
  textCapitalize: {
    textTransform: 'capitalize',
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  darkShadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  weight500: {
    fontWeight: '500',
  },
  weight600: {
    fontWeight: '600',
  },
});

export const ONE_SECOND_IN_MS = 1000;

export const VIBRATE_PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

export const VIBRATE_PATTERN_DESC =
  Platform.OS === 'android'
    ? 'wait 1s, vibrate 2s, wait 3s'
    : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
