import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UsersList from './screens/UsersList'
import CreateuserScreen from './screens/CreateuserScreen'
import UserDetailScreen from './screens/UserDetailScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={CreateuserScreen} name='create_user'/>
        <Stack.Screen component={UsersList} name='user_list'/>
        <Stack.Screen component={UserDetailScreen} name='user_detail'/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
