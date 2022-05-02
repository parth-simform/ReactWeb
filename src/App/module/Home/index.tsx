/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Input from '../../components/TextInput';
import {useDispatch} from 'react-redux';
import {Creators} from '../../redux/reducers';

const Home = (props: any) => {
  const dispetch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const onSubmit = () => {
    let emails = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    if (emails != null && name.trim() != '') {
      dispetch(Creators.fetchData({props, email, name}));
    } else {
      alert('Please Enter Proper Data');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default Home;
