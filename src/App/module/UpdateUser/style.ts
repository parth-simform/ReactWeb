import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  flatText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 18,
  },
  flatView: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  backContainer: {
    flex: 0.1,
    alignItems: 'flex-start',
    marginLeft: 50,
  },
  inputContainer: {
    alignItems: 'center',
  },
  txtColor: {
    color: 'white',
  },
});
