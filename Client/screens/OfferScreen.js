import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import RestaurantofferScreen from './RestaurantofferScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PromoScreen from './PromoScreen';


/*------------------------------------------------------------------------------Offer screen top navigation  start  ------------------------------------------------------------------------------------- */
const Tab = createMaterialTopTabNavigator();


export default function OfferScreen() {
  return (
    <View style={{ flex: 1,marginTop:1}}>
  
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'red',
        style: {
          backgroundColor: 'white',
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        indicatorStyle: {
          backgroundColor: 'red',
        },
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantofferScreen} />
      <Tab.Screen name="Promos" component={PromoScreen} />
    </Tab.Navigator>
  </View>
   
  )
}

/*------------------------------------------------------------------------------Offer screen top navigation end ------------------------------------------------------------------------------------- */