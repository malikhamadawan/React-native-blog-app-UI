import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import gobalStyles from '../styles/gobalStyles';
import ImagePicker from 'react-native-image-crop-picker';

export const Register = () => {
  const [text, setText] = useState(require('../../assets/bkimage.png'));
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [displayPicture, setDisplayPicture] = useState();
  const onPickPicture = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
    }).then(image => {
      setDisplayPicture(image.path);
    });
  };
  const onClickPicture = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
    }).then(image => {
      setDisplayPicture(image.path);
    });
  };
  async function onRegister() {
    if (!email && !password) {
      return;
    }
    try {
      const {
        user: {uid},
      } = await auth().createUserWithEmailAndPassword(email, password);

      let downloadURL = null;
      if (displayPicture) {
        const spiltPath = displayPicture.split('/');
        const imageName = spiltPath[spiltPath.length - 1];
        const reference = storage().ref(`${uid}/images/${imageName}`);
        const data = await reference.putFile(displayPicture);
        downloadURL = await storage()
          .ref(data.metadata.fullPath)
          .getDownloadURL();
      }

      firestore()
        .collection('users')
        .doc(uid)
        .set({
          email,
          name,
          displayPicture: downloadURL,
        })
        .then(() => console.log('Done'));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={gobalStyles.mainContainer}>
      <Image
        source={displayPicture === '' ? text : {uri: displayPicture}}
        style={gobalStyles.displayPicture}
      />
      <View style={gobalStyles.touchableContainer}>
        <TouchableOpacity onPress={onPickPicture}>
          <Text>Pick Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickPicture}>
          <Text>Click Picture</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Name"
        style={gobalStyles.primaryInput}
        onChangeText={text => setName(text)}
      />
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
      <Button title="Register" onPress={onRegister} />
    </View>
  );
};
