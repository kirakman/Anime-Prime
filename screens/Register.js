import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import RegisterButton from '../components/RegisterButton';

const Register = () => {

  const navigation = useNavigation();

  return (
  <ImageBackground
  source={require('../assets/Backgrounds/RegisterandLoginPage.png')}
  style={styles.backgroundImage}>
    <SafeAreaView>
    <View
      style={styles.forms}
      >
    <View style={styles.header}>
      <Image
      source={require('../assets/Backgrounds/logoregistrar2.png')}
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
    <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        keyboardType="numeric"
        placeholderTextColor="white"
      />
    <View style={styles.button}>
    <RegisterButton/>
    </View>
    <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Já possui possui uma conta?</Text>
            <TouchableOpacity
                 onPress={()=>navigation.navigate("Homepage")}
            >
              <Text style={styles.titleText}>Logar</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: 30,
    top: 220,
  },
  button: {
    alignItems: 'center',
    marginTop: 15
  },
  textContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingBottom: 25
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  titleText: {
    fontSize: 18,
    color: '#F89810',
    fontWeight: 'bold', 
    marginLeft: 5,
  },
})

export default Register;