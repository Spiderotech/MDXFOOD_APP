import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
/*------------------------------------------------------------------------------Welcome screen  start ------------------------------------------------------------------------------------- */

export default function WelcomeScreen() {
    const navigation=useNavigation()

    setTimeout(()=>{
        navigation.navigate('Register')
      

    },3000);
  return (
    <SafeAreaView className="bg-red-600 h-full flex-1 justify-center items-center">
      <Text className="text-white font-semibold text-2xl">MDXFOOD.COM</Text>
    </SafeAreaView>
  )
}


/*------------------------------------------------------------------------------Welcome screen  start ------------------------------------------------------------------------------------- */