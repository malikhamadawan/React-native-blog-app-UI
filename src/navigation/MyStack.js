import React , {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Login} from '../screen/auth/Login';
import {Register} from '../screen/auth/Register';
import { HomeScreen } from '../screen/mainScreen/HomeScreen';
import { CreateBlogs } from '../screen/mainScreen/CreateBlogs';
import { Blogs } from '../screen/mainScreen/Blogs';
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator()

const MyStack = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  async function onAuthStateChanged(user) {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    if (loading) setLoading(false);
  }
  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);
  if (loading) {
    return <ActivityIndicator size={32} color="gray" />;
  }
    if(!loggedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Login'>
          <Tab.Screen name='Login' component={Login} />
          <Tab.Screen name='Register' component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateBlogs"
          component={CreateBlogs}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Blogs"
          component={Blogs}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;