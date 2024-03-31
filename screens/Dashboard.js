import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.flex}>
            <View style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
            <Text style={{color:'#ffff', fontSize: 24}}>Anime</Text>
            <Text style={{color:'#F89810', fontSize: 24}}>Prime</Text>
            </View>
            <Ionicons name='search-circle' size={40} color={'#F89810'}/>
            </View>
        </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212121',
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 4,
        flexDirection: 'row'
    },
    safeArea: {
      margin: 15,
      paddingVertical: 50
    }
});

export default Dashboard;
