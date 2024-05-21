import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig'; 


const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fpassword, setfPassword] = useState('');
  const navigation = useNavigation();
  const auth = getAuth();

  const handleLogin = async () => {
    try {
      // Email ve şifre ile oturum açma işlemi
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);

      // Giriş başarılıysa, Dashboard sayfasına yönlendirin
      navigation.navigate('DashBoard');
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    }
  };

  const GoogleSignIn = async () => {
    try {
      // Google Authentication sağlayıcısını oluşturun
      const provider = new GoogleAuthProvider();

      // Google hesabıyla oturum açma penceresini açın ve sonucu alın
      const result = await signInWithPopup(auth, provider);

      // Oturum açma başarılıysa, sonucun kullanıcı bilgilerini alın
      const user = result.user;

      // Kullanıcı bilgilerini konsola yazdırın
      console.log("Google Authentication Success:", user);

      // Giriş yapıldıktan sonra bir sonraki sayfaya yönlendirin (örneğin, 'Dashboard')
      navigation.navigate('DashBoard');
    } catch (error) {
      // Hata oluşursa, hatayı konsola yazdırın ve kullanıcıya bildirin
      console.error("Google Authentication Failed:", error);
      alert("Google Authentication Failed: " + error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={require('./assets/file.png')} style={styles.logo} />
      
      <Text style={styles.title}>WalkWell</Text>

      <TextInput style={styles.input} 
      placeholder="Username"
       value={username} 
       onChangeText={text=>setUsername(text)}
/>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={text=> setEmail(text)}
      />

      <TextInput style={styles.input} placeholder="Password" 
      value={password}
      onChangeText={text=>setPassword(text)} />

      <TouchableOpacity
        style={styles.fpassword}
        onPress={() => navigation.navigate('GetCode')}>
    <Text style={styles.buttonText}>Forgot Password ?</Text>
        
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.button} onPress={GoogleSignIn}>
        <Text style={styles.buttonText}>Login with Google</Text>
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
    color: '#EEE7DA',
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
  fpassword:{
marginBottom:10,
  },

  button: {
    width: '60%',
    borderRadius: 20,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    height: 30,
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
  innertext: {
    fontSize: 16,
    marginBottom: 20,
    padding: 50,
    color: '#EEE7DA',
  },
});

export default Login;
