import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const RegisterButton = () => {
    
  return (
    <TouchableOpacity style={styles.button}
    >
      <Text style={styles.buttonText}>Registrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E8E7E8',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 150,
    borderRadius: 55,
    marginBottom: 20,
  },
  buttonText: {
    color: '#F89810',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
}
});

export default RegisterButton;
