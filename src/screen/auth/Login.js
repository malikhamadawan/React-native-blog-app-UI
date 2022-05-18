import React, {useEffect, useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import gobalStyles from '../styles/gobalStyles';

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function onLogin() {
    auth().signInWithEmailAndPassword(email, password);
  }
  return (
    <View style={gobalStyles.mainContainer}>
      <TextInput
        placeholder="Email"
        style={gobalStyles.primaryInput}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={gobalStyles.primaryInput}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};
