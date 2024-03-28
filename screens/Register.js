import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React,{ useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  // Firebase Auth

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  // Login

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await auth.signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Registrado com sucesso! Por favor, cheque o seu e-mail.')
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
  <ImageBackground
  source={require('../assets/Backgrounds/RegisterandLoginPage.png')}
  style={styles.backgroundImage}>
    <SafeAreaView>
    <KeyboardAvoidingView behavior='padding'>
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
    <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        placeholderTextColor="white"
        secureTextEntry={isPasswordShown}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}
    onPress={signUp}
    >
      <Text style={styles.buttonText}>Registrar</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.textContainer}>
            <Text style={styles.secondbuttonText}>Já possui possui uma conta?</Text>
            <TouchableOpacity
                 onPress={()=>navigation.navigate("Homepage")}
            >
              <Text style={styles.titleText}>Logar</Text>
            </TouchableOpacity>
        </View> 
    </View>
    </KeyboardAvoidingView>
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
  secondbuttonText: {
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
    backgroundColor: '#E8E7E8',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 150,
    borderRadius: 55,
    marginBottom: 20,
    marginTop: 20
  },
  buttonText: {
    color: '#F89810',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonContainer: {
    alignItems: 'center'
  }
})

export default Register;