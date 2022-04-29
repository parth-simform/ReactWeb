import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Input from '../../components/TextInput';
import {useDispatch} from 'react-redux';
import {Creators} from '../../redux/reducers';
const Home = (props: any) => {
  const dispetch = useDispatch();
  // const filiais = useSelector(state => state);
  // console.log(filiais, 'filiais');

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const onSubmit = () => {
    dispetch(Creators.fetchData({props, email, name}));
    console.log(email);
  };
  return (
    <View style={styles.container}>
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
  );
};
// const mapStateToProps = (state: any) => {
//   console.log(state);

//   return {};
// };
export default Home;
// connect(mapStateToProps, null)(Home);
