import React, { useState } from 'react';
import {Alert, Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

export default ({navigation}) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const handleSignInPress  = () => {
    if (user.trim().length === 0 && password.trim.length === 0 ) return
    if (user === 'test' && password === 'test') return navigation.navigate('Home')

    Alert.alert('Error','Incorrect')
    setPassword('')
    setUser('')
  } 
  return <View style={styles.container}>
  <View 
      style={styles.imageContainer}
  
  >
    <Image
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      style={styles.image}
    />
  </View>
      <TextInput placeholder='user' style={styles.textInput} onChangeText={setUser}/>
      <TextInput placeholder='password' style={styles.textInput} secureTextEntry onChangeText={setPassword} />
      <Button style={styles.button} title='Send' onPress={handleSignInPress} />
  <View />
</View>
}
const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  imageContainer:{
    marginTop: 10,
    marginBottom: 10
  },
  textInput:{
    backgroundColor: '#fffbfb',
    padding: 6,
    marginTop: 4,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor:'#197602'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    marginLeft: 18,
    marginRight: 18
  }
});
