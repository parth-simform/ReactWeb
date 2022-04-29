import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
// import {Creators} from '../../redux/reducers';
const Settings = () => {
  const Data: any = useSelector((state: any) => state.userData);
  console.log(Data);

  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
