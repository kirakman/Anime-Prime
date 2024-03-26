import { View, Text, SafeAreaView, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const Homepage = () => {
  return (
  <ImageBackground
  source={require('../assets/Backgrounds/Homepage.png')}
  style={styles.backgroundImage}>
    <SafeAreaView>
      <View>
        <Text>Homepage</Text>
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
  }
});

export default Homepage;