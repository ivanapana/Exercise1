import React from 'react';
import {TextInput as Input, Text, StyleSheet} from 'react-native';

const TextInput = ({placeholder, label, ...rest}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} {...rest} />
    </>
  );
};
export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#8e8d8eff',
    borderRadius: 12,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    color: '#8e8d8eff',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
