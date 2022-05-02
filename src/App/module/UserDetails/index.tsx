/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {Creators} from '../../redux/reducers';
interface Data {
  email: string;
  name: string;
}
interface userData {
  userData: Data;
}
const UserDetails = (props: any) => {
  const dispetch = useDispatch();
  const Data: any = useSelector((state: userData) => state.userData);
  const renderItem: ListRenderItem<Data> = ({item}) => {
    return (
      <View style={styles.flatView}>
        <View>
          <Text style={styles.flatText}>Email: {item.email}</Text>
          <Text style={styles.flatText}>Name: {item.name}</Text>
        </View>
        <View style={styles.deleUpdaContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => deleteUser(item)}>
            <Text style={[styles.flatText, styles.deleteText]}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.updateTxt]}
            onPress={() => updateUser(item)}>
            <Text style={[styles.flatText, styles.updateText]}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const deleteUser = (item: Data) => {
    dispetch(Creators.deleteUser(item.email));
  };
  const updateUser = (item: Data) => {
    props.navigation.push('UpdateUser', {
      email: item.email,
      name: item.name,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatContainer}>
        {Data.length > 0 ? (
          <FlatList
            data={Data}
            renderItem={renderItem}
            style={styles.flatStyle}
          />
        ) : (
          <Text style={{color: 'white'}}>No Data Available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;
