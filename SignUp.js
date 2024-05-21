import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passworda, setPassworda] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const auth = getAuth(firebaseConfig);

  const handleRegister = async () => {
    if (!email || !password || !passworda || password !== passworda) {
      alert('Please fill all fields and make sure passwords match.');
      return;
    }

    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('DashBoard');
    } catch (error) {
      console.log(error);
      alert('Sign up failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/file.png')} style={styles.logo} />
      <Text style={styles.title}>WalkWell</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Password Again"
        value={passworda}
        onChangeText={text => setPassworda(text)}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    color: '#80471C'
  },
  button: {
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 50,
    height: 30,
    borderWidth: 1,
    borderColor: '#420D09',
  },
  buttonText: {
    color: '#65350F'
  },
  logo: {
    width: 99,
    height: 100,
    marginBottom: 3
  },
  innertext: {
    fontSize: 16,
    marginBottom: 20,
    padding: 50,
    color: '#EEE7DA'
  }
});

export default SignUp;
