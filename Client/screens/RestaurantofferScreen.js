import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Offercard from '../components/offercard'
import Offercard2 from '../components/offercard2'
import Popularitems from '../components/popularitems';
import Offercard3 from '../components/offercard3';
/*------------------------------------------------------------------------------Restaurantoffers  screen  start ------------------------------------------------------------------------------------- */

export default function RestaurantofferScreen() {
  return (
    <SafeAreaView className="h-full bg-[#f3f3f3]">
      <StatusBar barStyle="dark-content" />
      <ScrollView>


        <View className=" w-[90%]  m-5">

          <ScrollView showsVerticalScrollIndicator={false}>
            <Offercard />

          </ScrollView>

        </View>
        <View className=" w-[90%]  m-5">
          <View className="flex flex-row  items-center">
            <Text className="text-xl font-semibold">Today's Offers</Text>

          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Offercard2 />

          </ScrollView>


        </View>
        {/* <View className=" w-[90%]  m-5">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-2xl font-semibold">Free Delivery*</Text>
            <Text className=" text-sm font-semibold text-gray-500 mr-5">View all</Text>

          </View>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Popularitems />



          </ScrollView>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Popularitems />

          </ScrollView>



        </View> */}

        <View className=" w-full  m-5">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-2xl font-semibold">All offers</Text>
            <Text className=" text-sm font-semibold text-gray-500 mr-5">View all</Text>

          </View>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Offercard3 />


          </ScrollView>



        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

/*------------------------------------------------------------------------------Restaurantoffers  screen  end ------------------------------------------------------------------------------------- */