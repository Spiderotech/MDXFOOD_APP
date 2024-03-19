import { View, Text, SafeAreaView, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


/*------------------------------------------------------------------------------forgot password screen  start ------------------------------------------------------------------------------------- */


export default function ForgotpasswordScreen() {
  return (
    <SafeAreaView className="h-full bg-[#f6f2f2]">
      <StatusBar barStyle="" />
      <View className="w-full   mt-20 flex flex-col justify-center items-center">
        <View className="flex justify-center items-center">
          <Text className="text-5xl font-bold mb-6 text-black text-center ">Forgot    Password</Text>
          <Text className="text-xl  mb-6 text-black ">New Password</Text>
        </View>

        <View className="mt-10">
          <Text className="text-sm  text-black ">EMAIL</Text>
          <TextInput keyboardType="email-address" placeholder="   Enter email address" className="w-80 h-16  mt-2 mb-4 border" />
          <TouchableOpacity
            className=" bg-red-600 w-80 h-16 mt-5 flex justify-center items-center  "


          >
            <Text className="text-white text-xl font-medium ">send</Text>
          </TouchableOpacity>
        </View>



      </View>

    </SafeAreaView>
  )
}

/*------------------------------------------------------------------------------forgot password screen  end ------------------------------------------------------------------------------------- */