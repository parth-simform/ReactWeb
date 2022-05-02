/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
import {Text, TouchableOpacity, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Input from '../../components/TextInput';
import {useDispatch} from 'react-redux';
import {Creators} from '../../redux/reducers';

const UpdateUser = (props: any) => {
  const dispetch = useDispatch();
  const [email, setEmail] = useState<string>(props.route.params.email);
  const [name, setName] = useState<string>(props.route.params.name);
  const onSubmit = () => {
    let emails = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    if (emails != null && name.trim() != '') {
      dispetch(Creators.updateUser({props, email, name}));
    } else {
      alert('Please Enter Proper Data');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          title="Email"
          value={email}
          editable={false}
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
          <Text style={styles.text}>Update Data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
