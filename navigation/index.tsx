import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import LinkingConfiguration from './LinkingConfiguration';
import AuthStack from './AuthStack';
import { Asset } from 'expo-asset';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStack from './AppStack';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import {
  useFonts, Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins'
import { setUserInfo } from '../features/authSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootStack = createStackNavigator();

const AppLoadingScreen = () => {



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Your loading image */}
      <Image source={require('../assets/adaptive-icon.png')} style={{ width: 200, height: 200 }} />
    </View>
  );
};
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { user, isSuccess } = useAppSelector((state) => state.auth)

  console.log('user-user', user)

  const dispatch = useAppDispatch();

  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        // Load any additional assets or fonts here
        await Promise.all([
          Asset.loadAsync([require('../assets/adaptive-icon.png')]),
          // Add other assets or fonts if needed
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        setTimeout(() => {
          setAppIsReady(true);
          SplashScreen.hideAsync();
        }, 5000);
      }
    }

    prepare();
  }, []);

  React.useEffect(() => {
    userInfo();
  }, [isSuccess]);


  const userInfo = async () => {
    try {
      const info: any = await AsyncStorage.getItem('userfutti')



      dispatch(setUserInfo(JSON.parse(info)))
    }
    catch (e) {
      console.log(`isLoggedIn in error ${e}`)
    }
  }

  if (!fontsLoaded || !appIsReady) {
    // Display the loading screen until the app is ready
    return <AppLoadingScreen />;
  }

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {user ?
        <AppStack />
        :
        <AuthStack />
      }
    </NavigationContainer>
  );
}







