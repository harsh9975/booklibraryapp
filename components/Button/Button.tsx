import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {primaryColor} from '../../consts/const';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, onPress, style, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primaryColor,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Button;
