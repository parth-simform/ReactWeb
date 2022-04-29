import {StyleSheet, Platform} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Matrics';

const isNative = Platform.OS !== 'web';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: isNative ? horizontalScale(250) : horizontalScale(100),
    height: verticalScale(35),
    margin: moderateScale(10),
    borderWidth: 1,
    padding: 10,
    color: 'white',
  },
});
