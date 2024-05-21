
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View } from 'react-native';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Settings from './Settings';
import forgotPass from './forgotPass';
import DashBoard from './DashBoard';
import GetCode from'./GetCode';
import CodeVerify from './CodeVerify';
import './App.css';

const Stack= createStackNavigator();
function App(){
return(
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name ="LoginPage"
   component={LoginPage}/>
   <Stack.Screen name ="SignUp"
   component={SignUp}/>
    <Stack.Screen name ="Settings"
   component={Settings}/>
       <Stack.Screen name ="forgotPass"
   component={forgotPass}/>
   <Stack.Screen name ="DashBoard"
   component={DashBoard}/>
   <Stack.Screen name="GetCode"
   component={GetCode}/>
   <Stack.Screen name ="CodeVerify"
   component={CodeVerify}/>

  
  </Stack.Navigator>
  </NavigationContainer>

);

}



export default App;