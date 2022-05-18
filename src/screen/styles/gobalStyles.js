import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {moderateScale} from '../../../Theme/Dimensions';
const { height, width } = Dimensions.get('window');
const gobalStyles = StyleSheet.create({
        mainContainer: {
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
        },
        primaryInput: {
                width: (width/100)*80,
                margin:moderateScale(10),
                borderBottomWidth: 0.6,
                borderBottomColor: 'gray', 
        },
        touchableContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: (width/100)*50,
        },
        displayPicture: {
                width: moderateScale(70),
                height: moderateScale(70),
                borderRadius: 35,
                backgroundColor: 'gray',
        },
});
export default gobalStyles