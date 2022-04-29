import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './style';
const Input = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title} :</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={'white'}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Input;
