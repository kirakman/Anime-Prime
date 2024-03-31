import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const Dashboard = () => {
  const navigation = useNavigation();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Erro ao verificar o status de login:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      const auth = FIREBASE_AUTH;
      await signOut(auth);
      await AsyncStorage.removeItem('isLoggedIn');
      navigation.navigate('Homepage');
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };

  const handleNavigateToHomepage = () => {
    navigation.navigate('Dashboard');
  };

  const handleNavigateToSearch = () => {
    navigation.navigate('Search');
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#212121' }}>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleNavigateToHomepage}>
            <Ionicons name='home' size={20} color={'000'} />
            <Text style={styles.buttonText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNavigateToSearch}>
            <Ionicons name='search-circle' size={20} color={'000'} />
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNavigateToProfile}>
            <Ionicons name='person-circle' size={20} color={'000'} />
            <Text style={styles.buttonText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Ionicons name='log-out' size={20} color={'000'} />
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    top: 800,
    backgroundColor: '#F89810',
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
    borderColor: '#F89810'
  },
  button: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Dashboard;
