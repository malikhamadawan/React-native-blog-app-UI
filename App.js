import React from 'react';
import MyStack from './src/navigation/MyStack';
import { LogBox } from 'react-native';
import auth from '@react-native-firebase/auth';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return <MyStack />;
};
export default App;