import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../module/Home';
import UserDetails from '../module/UserDetails';
import UpdateUser from '../module/UpdateUser';
const Stack = createNativeStackNavigator();

// type Name = {
//   Home: string;
//   UpdateUser: string;
//   UserDetails: string;
//   NotFound: string;
// };
// interface Screen {
//   config: Name;
// }
// const linking: Screen = {
//   config: {
//     Home: '',
//     UpdateUser: 'UpdateUser',
//     UserDetails: 'feed',
//     NotFound: '404',
//   },
// };
const linking = {
  prefixes: ['http://localhost:8080/'],
  config: {
    screens: {
      Home: '',
      UserDetails: 'UserDetails',
      UpdateUser: 'UpdateUser',
    },
  },
};
export default function Router() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
