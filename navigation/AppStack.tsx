import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { Pressable, StyleSheet } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/App/Home';
import Location from '../screens/App/Location';
import Statistic from '../screens/App/Statistic';
import ProfileSettings from '../screens/App/ProfileSettings';
import WeightMeasure from '../screens/App/WeightMeasure';
import Colors from '../constants/Colors';
import CurrentJoggingScreen from '../screens/App/CurrentJoggingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Settings from '../screens/App/Settings';
import LocationMap from '../screens/App/LocationMap';
import { Platform } from 'react-native';



const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();


function AuthStack() {





  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator initialRouteName="HomeDs" screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: Colors[colorScheme].TopTab },
      headerTintColor: Colors[colorScheme].headerTintColor,
      headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Poppins_500Medium', },
    }}>

      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="CurrentJoggingScreen" component={CurrentJoggingScreen} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
      <Stack.Screen name="LocationMap" component={LocationMap} />



      {/* <Stack.Screen name="ReportStatus" component={ReportStatus} options={({ navigation }) => ({
        title: 'Report Status',
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Accounts')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </Pressable>
        ),

      })} /> */}
      {/* <Stack.Screen name="SuccessConfirmed" component={SuccessConfirmed} options={{ title: 'Success Confirmed', headerShown: false }} /> */}
      {/* <Stack.Screen name="DetailsPage" component={DetailsPage} options={{ title: 'Details' }} /> */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}> */}
      {/* <Stack.Screen name="AboutUs" component={AboutUs} options={{ title: 'About Us' }} /> */}
      {/* </Stack.Group> */}
    </Stack.Navigator>
  );
}




function BottomTabNavigator() {
  const colorScheme = useColorScheme();




  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F95357", // Active tab color
        tabBarInactiveTintColor: "#979797", // Inactive tab color
        tabBarStyle: {
          backgroundColor: "#1E1E1E", // Background color of the bottom tab bar
          paddingTop: 10,
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: Platform.OS === 'android' ? 10 : 20,
        },

      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerTitle: '',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="running" color={color} size={size} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('CurrentJoggingScreen')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome name="user-circle-o" color={Colors[colorScheme].text} size={25} style={{ marginRight: 15 }} />
            </Pressable>
          ),

        })}
      />

      <BottomTab.Screen
        name="Location"
        component={Location}
        options={({ navigation }: RootTabScreenProps<'Location'>) => ({
          title: 'Location',
          tabBarIcon: ({ color, size }) => <Ionicons name="md-location-sharp" color={color} size={size} />,


        })}
      />

      <BottomTab.Screen
        name="Statistic"
        component={Statistic}
        options={({ navigation }: RootTabScreenProps<'Statistic'>) => ({
          title: 'Statistic',
          tabBarIcon: ({ color, size }) => <AntDesign name="piechart" color={color} size={size} />,

        })}
      />

      <BottomTab.Screen
        name="WeightMeasure"
        component={WeightMeasure}
        options={({ navigation }: RootTabScreenProps<'WeightMeasure'>) => ({
          title: 'WeightMeasure',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="weight" s color={color} size={size} />,

        })}
      />

      <BottomTab.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={({ navigation }: RootTabScreenProps<'ProfileSettings'>) => ({
          title: 'ProfileSettings',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={size} />,
          headerShown: false,

        })}
      />
    </BottomTab.Navigator >

  );
}
export default AuthStack;




