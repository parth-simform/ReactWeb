/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  View,
  ListRenderItem,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import Input from '../../components/TextInput';
import {useDispatch, useSelector} from 'react-redux';
import {Creators} from '../../redux/reducers';

interface Data {
  email: string;
  name: string;
}
interface userData {
  userData: Data;
}

// interface Item {
//   item: Data;
// }
const Home = (props: any) => {
  const dispetch = useDispatch();
  const filiais = useSelector((state: userData | any) => state.userData);
  const [userData, setUserData] = useState(filiais);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const onSubmit = () => {
    dispetch(Creators.fetchData({props, email, name}));
  };
  useEffect(() => {
    setUserData(filiais);
  }, [filiais]);
  const renderItem: ListRenderItem<Data> = ({item}) => {
    return (
      <View style={styles.flatView}>
        <Text style={styles.flatText}>Email: {item.email}</Text>
        <Text style={styles.flatText}>Name: {item.name}</Text>
      </View>
    );
  };

  // <Todo todo={item} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 0.4}}>
        <Input
          title="Email"
          value={email}
          onChangeText={setEmail}
          placeholder={'Enter email'}
        />
        <Input
          title="Name"
          value={name}
          onChangeText={setName}
          placeholder={'Enter name'}
        />
        <TouchableOpacity onPress={onSubmit} style={styles.btn}>
          <Text style={styles.text}>Add Data</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.6, marginTop: 10}}>
        <Text>Hellooo</Text>
        {/* {filiais.length > 0 && ( */}
        <FlatList
          data={userData}
          renderItem={renderItem}
          style={{width: 300}}
        />
        {/* )} */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
