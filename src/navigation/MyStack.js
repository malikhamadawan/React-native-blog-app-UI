import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from '../navigation/MyTabs';
import { HomeScreen } from '../screen/mainScreen/HomeScreen';
import { CreateBlogs } from '../screen/mainScreen/CreateBlogs';
import { Blogs } from '../screen/mainScreen/Blogs';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyTab"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateBlogs"
          component={CreateBlogs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Blogs"
          component={Blogs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;