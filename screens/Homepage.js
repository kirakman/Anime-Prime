import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const Homepage = () => {

  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(true);

    // Firebase Auth

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    // Logar

    const signIn = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Usuario logado com sucesso!');
        setEmail('');
        setPassword('');
        navigation.navigate('Dashboard');
      } catch (error) {
        alert('Erro na autenticação, por favor, tente novamente:', error.message);
      }
    }

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
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
    <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="white"
        secureTextEntry={isPasswordShown}
        onChangeText={(text) => setPassword(text)}
        value={password}
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
    <View style={styles.buttonFlex}>
    <TouchableOpacity style={styles.button} onPress={signIn}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>    
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
    top: 250,
  },
  buttonFlex: {
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
  },
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
})

export default Homepage;