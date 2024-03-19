import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import OfferScreen from './screens/OfferScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import RestaurentScreen from './screens/RestaurentScreen';
import CartScreen from './screens/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
      
      <Tab.Navigator
       /*------------------------------------------------------------------------------Full mobile app navigation ------------------------------------------------------------------------------------- */
     
        screenOptions={({ route  }) => ({
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
              backgroundColor:'red',
              borderTopEndRadius:20,
              borderTopLeftRadius:20,
              height:80,
                

            },
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused ? 'compass' : 'compass';
              } else if (route.name === 'Offers') {
                iconName = focused ? 'gift' : 'gift';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart';
              }
  
            return <Ionicons name={iconName} size={size}  color={focused ? 'white' : 'black'} />;
          },
        })}

        
      >
        <Tab.Screen name="Home" component={HomeScreen} />    
        {/* <Tab.Screen name="Offers" component={OfferScreen} /> */}
        {/* <Tab.Screen name="Cart" component={CartScreen} /> */}
        <Tab.Screen name="Profile" component={ProfileScreen} />
        
      </Tab.Navigator>
    );
  };


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Frogot" component={ForgotpasswordScreen} />
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
                <Stack.Screen name="Restaurant" component={RestaurentScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
  
    );
}


 