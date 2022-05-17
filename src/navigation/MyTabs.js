import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Login } from '../screen/auth/Login';
import { Register } from '../screen/auth/Register';
const Tab = createMaterialTopTabNavigator();

const MyTabs=()=> {
  return (
      <NavigationContainer independent= 'true' >
    <Tab.Navigator >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;