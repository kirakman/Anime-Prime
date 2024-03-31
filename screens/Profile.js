// Dashboard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Profile = () => {
  const navigation = useNavigation();

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
    <View style={{flex: 1, backgroundColor: '#2121'}}>
      <SafeAreaView>
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToHomepage}>
      <Ionicons name='home' size={20} color={'000'}/>
      <Text style={styles.buttonText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToSearch}>
      <Ionicons name='search-circle' size={20} color={'000'}/>
      <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToProfile}>
      <Ionicons name='person-circle' size={20} color={'000'}/>
      <Text style={styles.buttonText}>Perfil</Text>
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

export default Profile;
