import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ForgotPass = () => {

  const [email, setEmail] = useState('');
  const [npassword, setPassword] = useState('');
  const [npassworda, setPassworda] = useState('');
 const navigation=useNavigation();
    

  return (
    <View style={styles.container}>
      <Image source={require('./assets/file.png')} style={styles.logo} />
      <Text style={styles.title}>WalkWell</Text>
     
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={text=>setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder=" New Password"
        value={npassword}
         onChangeText={text=>setPassword(text)}
      />
      <TextInput
      style={styles.input}
        placeholder=" New Password Again"
        value={npassworda}
         onChangeText={text=>setPassworda(text)}
      />

      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>

      <Text style={styles.innertext}>Walk Safe Walk Well</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#88AB8E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#EEE7DA'
  },

   input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#420D09',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#EEE7DA',
    borderRadius: 20,
    color:'#80471C'
    
  },
  button: {
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop:50,
    height:30,
    padding:20,
     borderWidth: 1,
    borderColor: '#420D09',
  },
   buttonText:{
    color:'#65350F'
  },

  
  logo: {
    
    width: 99,
    height: 100,
    marginBottom: 3
  },
  innertext:{
    fontSize: 16,
    marginBottom: 20,
    padding:50,
    color: '#EEE7DA'
  }
});

export default ForgotPass;
