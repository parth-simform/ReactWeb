import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/Matrics';

const isNative = Platform.OS !== 'web';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    padding: isNative ? moderateScale(10) : moderateScale(5),
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
