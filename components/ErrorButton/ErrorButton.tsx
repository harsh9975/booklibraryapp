/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {textColor} from '../../consts/const';
import Button from '../Button/Button';

interface ErrorButtonProps {
  onPress: () => void;
}

const ErrorButton: React.FC<ErrorButtonProps> = ({onPress}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <Text style={{color: textColor, fontSize: 20}}>Something went wrong</Text>
      <Button title="Try Again" onPress={onPress} style={{marginTop: 20}} />
    </View>
  );
};

export default ErrorButton;
