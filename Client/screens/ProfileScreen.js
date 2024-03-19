import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import * as Icon from "react-native-feather";
import React from 'react'
/*------------------------------------------------------------------------------Pfofile  screen   start  ------------------------------------------------------------------------------------- */

export default function ProfileScreen() {
  return (
    <SafeAreaView className="h-full bg-[#f3f3f3]">
      <StatusBar barStyle="dark-content" />
      <View className="w-full h-[60%] bg-white flex flex-col rounded-b-lg  ">
        <View className=" w-[90%] h-20 m-5 ">
          <View className="flex flex-row justify-between">
            <Text className="text-xl font-semibold mt-2">Username</Text>
            <Text className=" text-sm font-semibold text-red-600 mr-5 mt-2">EDIT</Text>
          </View>
          <View className="flex flex-row ">
            <Text className=" text-sm text-slate-400 font-semibold mt-1">0000000000</Text>
            <Text className=" text-sm text-slate-400 font-semibold mt-1"> . </Text>
            <Text className="text-sm text-slate-400 font-semibold mt-1"> Username@gmail.com</Text>
          </View>
        </View>


        <View className="divide-y divide-[#d5d2d2] ">
          <View className="w-[85%] h-12 ml-7 flex flex-row ustify-center items-center mb-2">
            <Icon.MapPin height={26} width={26} stroke="gray" className="ml-2" />
            <Text className="text-sm text-black  ml-4">My Orders</Text>
          </View>

          <View className="w-[85%] h-12  ml-7 flex flex-row ustify-center items-center mb-2">
            <Icon.Paperclip height={26} width={26} stroke="gray" className="ml-2 mt-2" />
            <Text className="text-sm text-black  ml-4 ">Payments</Text>
          </View>

          <View className="w-[85%]  h-12  ml-7 flex flex-row ustify-center items-center mb-2">
            <Icon.Heart height={26} width={26} stroke="gray" className="ml-2" />
            <Text className="text-sm text-black  ml-4">Favourites</Text>
          </View>

          <View className="w-[85%]  h-12  ml-7 flex flex-row ustify-center items-center mb-2">
            <Icon.HelpCircle  height={26} width={26} stroke="gray" className="ml-2" />
            <Text className="text-sm text-black  ml-4">Help</Text>
          </View>


          <View className="w-[85%]  h-12  ml-7 flex flex-row ustify-center items-center mb-2">
            <Icon.LogOut height={26} width={26} stroke="gray" className="ml-2" />
            <Text className="text-sm text-black  ml-4">Logout</Text>
          </View>


        </View>



      </View>

    </SafeAreaView>
  )
}
/*------------------------------------------------------------------------------Profile screen  end  ------------------------------------------------------------------------------------- */


/* It will contain profile navigation buttons and profile edit button  */ 

/* 1.My Orders */
/* 2.Payments */
/* 3.Favourites */
/* 4.Help */
/* 5.Logout */