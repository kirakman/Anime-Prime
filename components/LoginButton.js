import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const LoginButton = () => {
    
  return (
    <TouchableOpacity style={styles.button}
    >
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CA7745',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 150,
    borderRadius: 55,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
}
});

export default LoginButton;
