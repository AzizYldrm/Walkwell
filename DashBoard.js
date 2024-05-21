import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Login = () => {
  const [bestScore, setBestScore] = useState(0); // Assuming a pre-existing value
  const [stepCount, setStepCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    let interval;

    if (isCounting) {
      interval = setInterval(() => {
        setStepCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setFinalScore(stepCount); // Son adım sayısını finalScore'a yaz
      setBestScore(Math.max(bestScore, stepCount)); // En iyi skoru güncelle
    }

    return () => clearInterval(interval);
  }, [isCounting, stepCount, bestScore]);

  const toggleCounting = () => {
    setIsCounting(prevState => !prevState);
  };

  const resetCounters = () => {
    setIsCounting(false);
    setStepCount(0);
    setFinalScore(0);
  };

  return (
    <View style={styles.container}>
      {/* Step Counter */}
      <TouchableOpacity style={styles.counterbutton} onPress={toggleCounting}>
        <Image source={require('./assets/greenfile.png')} style={styles.logo} />
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{stepCount} Steps</Text>
        </View>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={resetCounters}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
 
      <Text style={styles.title}>FINAL SCORE :</Text>
      <TextInput
        style={styles.input}
        placeholder="Final Score"
        value={finalScore.toString()} 
        editable={false}
      />

      
      <Text style={styles.title}>BEST SCORE :</Text>
      <TextInput
        style={styles.input}
        placeholder="Best Score"
        value={bestScore.toString()} 
        editable={false}
      />

     
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Image source={require('./assets/settings.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCounting}>
          <Image source={require('./assets/home.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.innertext}>   SETTINGS    HOME   </Text>

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
    padding:20,
  },
  counterbutton: {
    width: '70%',
    height: 200,
    borderRadius: 100,
    backgroundColor: '#EEE7DA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#420D09',
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#795C34',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#EEE7DA'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#420D09',
    fontWeight:'bold',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#EEE7DA',
    borderRadius: 20,
    color:'#795C34',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEE7DA',
    padding: 10,
    borderRadius: 20,
    marginRight:10,
    borderWidth: 1,
    borderColor: '#420D09',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#795C34',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 3
  },
  innertext:{
    fontSize: 16,
    color: '#EEE7DA'
  },
});

export default Login;
