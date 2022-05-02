import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    // justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    padding: 2,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  updateTxt: {backgroundColor: 'white'},
  flatText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  flatView: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  deleteText: {
    color: 'white',
    fontSize: 12,
  },
  updateText: {
    color: 'black',
    fontSize: 12,
  },
  backContainer: {
    alignItems: 'flex-start',
    marginLeft: 50,
  },
  flatContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatStyle: {
    width: 350,
    marginTop: 50,
  },
  deleUpdaContainer: {
    justifyContent: 'space-between',
  },
});
