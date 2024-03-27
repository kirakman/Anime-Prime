import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image,TextInput } from 'react-native'
import React from 'react'
import LoginButton from '../components/LoginButton';

const Homepage = () => {
  return (
  <ImageBackground
  source={require('../assets/Backgrounds/Homepage.png')}
  style={styles.backgroundImage}>
    <SafeAreaView>
    <View
      style={styles.forms}
      >
    <View style={styles.header}>
      <Image
      source={require('../assets/Backgrounds/logo.png')}
      style={styles.logoImage}/>
    </View>
    <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="white"
      />
    <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        keyboardType="numeric"
        placeholderTextColor="white"
      />
    <View style={styles.button}>
    <LoginButton/>
    </View>
    </View>
    </SafeAreaView>
  </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  backgroundImage: {
      flex: 1,
      width: '100%', 
      height: '100%', 
      resizeMode: 'cover', 
  },
  logoImage: {
    width: 300, 
    height: 80, 
    resizeMode: 'contain', 
    marginBottom: 30
  },
  header: {
    top: 18,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderColor: 'white',
    borderRadius: 20,
    fontSize: 16
  },
  forms: {
    margin: 20,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    borderRadius: 30,
    top: 420,
  },
  button: {
    alignItems: 'center',
    marginTop: 15
  }
});

export default Homepage;