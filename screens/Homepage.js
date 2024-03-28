import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Homepage = () => {

  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(true);

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
        placeholderTextColor="white"
        secureTextEntry={isPasswordShown}
      />
              <TouchableOpacity style={styles.icons}
          onPress={() => setIsPasswordShown (!isPasswordShown)}
          >
          {
          isPasswordShown == true ? (
          <Ionicons name='eye-off' size={20} color={'#F89810'}/>
          ) : (
          <Ionicons name='eye' size={20} color={'#F89810'}/>
          )
          }                
        </TouchableOpacity>
    <View style={styles.button}>
    <LoginButton/>
    </View>
    <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Ainda não possui uma conta?</Text>
            <TouchableOpacity
                 onPress={()=>navigation.navigate("Register")}
            >
              <Text style={styles.titleText}>Registrar</Text>
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
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    borderRadius: 30,
    top: 420,
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
  icons: {
    position: 'absolute',
    right: 45,
    top: 206
  }
})

export default Homepage;