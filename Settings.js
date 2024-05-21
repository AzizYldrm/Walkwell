import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Login = () => {
  const [notion, setNotion] = useState('');
  const [notiof, setNotiof] = useState('');
  const [soundon, setSoundon] = useState('');
  const [soundoff, setSoundoff] = useState('');
  const [cache, setCache] = useState('');

const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('./assets/file.png')} style={styles.logo} />
      <Text style={styles.title}>WalkWell</Text>
      <TextInput
        style={styles.input}
        placeholder="NOTIFICATION ON"
        value={notion}
         onChangeText={text=>setNotion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="NOTIFICATION OFF"
        value={notiof}
         onChangeText={text=>setNotion(text)}
        
      />
      <TextInput
        style={styles.input}
        placeholder="SOUND ON"
        value={soundon}
         onChangeText={text=>setSoundon(text)}
      />
      <TextInput
      style={styles.input}
        placeholder="SOUND OFF"
        value={soundoff}
         onChangeText={text=>setSoundoff(text)}
      />
      <TextInput
      style={styles.input}
        placeholder="CLEAR CACHE"
        value={cache}
         onChangeText={text=>setCache(text)}
      />
      
    

      <TouchableOpacity style={styles.button}onPress={()=>navigation.navigate('LoginPage')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homebutton}onPress={() => navigation.navigate('DashBoard')}>
 <Image source={require('./assets/home.png')} style={styles.homelogo} />
      </TouchableOpacity>
      <Text style={styles.hometext}>Home</Text>
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
    marginTop:10,
    height:40,
    borderWidth: 1,
    borderColor: '#420D09',
  },
   buttonText:{
    color:'#65350F'
  },

  logo: {
    width: 99,
    height: 100,
    marginBottom: 3,
  },
  innertext:{
    fontSize: 16,
    marginBottom: 20,
    padding:50,
    color: '#EEE7DA'
  },
  hometext:{
    fontSize: 16,
    marginBottom: 20,
     color: '#EEE7DA'
  },
  homebutton:{
    width: '20%',
    borderRadius: 40,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop:10,
    borderWidth: 1,
    borderColor: '#420D09',
  },
  homelogo:{ 
    width: 60,
    height: 60,
    marginBottom: 3
    
  }
});

export default Login;
