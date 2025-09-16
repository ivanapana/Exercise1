import React from 'react';
import {
  TextInput as RNTextInput,
  Text,
  StyleSheet,
  View,
  TextInputProps,
} from 'react-native';

interface Props extends TextInputProps {
  label: string;
}

const TextInput: React.FC<Props> = ({placeholder, label, ...rest}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 14,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});
