import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack';
import Login from '../screens/Auth/Login';
import SplashScreen from '../screens/SplashScreen';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import SignUp from '../screens/Auth/SignUp';
import OTPVerification from '../screens/Auth/OTPVerification';
import EnterOTP from '../screens/Auth/EnterOTP';
import CurrentJoggingScreen from '../screens/App/CurrentJoggingScreen';
import LoginOTPVerification from '../screens/Auth/LoginOTPVerification';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Home" component={AppStack} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="EnterOTP" component={EnterOTP} />
      <Stack.Screen name="CurrentJoggingScreen" component={CurrentJoggingScreen} />
      <Stack.Screen name="LoginOTPVerification" component={LoginOTPVerification} />
    </Stack.Navigator>
  );
};

export default AuthStack;
