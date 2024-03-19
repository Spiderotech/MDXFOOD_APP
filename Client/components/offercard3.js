import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categories } from '../constants'
import * as Icon from "react-native-feather";

export default function Offercard3() {
    return (
        /*------------------------------------------------------------------------------Offer page card start------------------------------------------------------------------------------------- */
        <View className="mt-2">
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 15

                }}
            >
                {
                    categories.map((category, index) => {
                        return (
                            <View key={index} className="flex justify-center items-center mr-5 mt-3">
                                <TouchableOpacity className=" rounded-lg shadow  flex flex-row w-full p-2">

                                    <Image style={{ width: 90, height: 100 }}
                                        className=" rounded-lg shadow"

                                        src='https://thekitchencommunity.org/wp-content/uploads/2021/09/shutterstock_138421859-steak.jpg'

                                    />
                                    <View className="w-60  flex flex-col ">
                                        <Text className=" ml-2 text-xl">MealBox</Text>

                                        <Text className="mt-1 ml-2 font-medium text-gray-500">Italian,Chinese,Indian</Text>
                                        <View className=" flex flex-row w-auto  ">
                                        <View className=" flex flex-row w-auto ml-2 " >
                                            <Icon.Star height={18} width={18} stroke="#f5c242" fill="#f5c242" className="mt-2 mr-1" />
                                            <Text className="mt-2  text-xs text-gray-500">4.1</Text>

                                            </View>
                                            <Text className="mt-2 ml-2 text-xs text-gray-500">40-45 mins</Text>
                                            

                                        </View>
                                        <View className=" flex flex-row w-auto  ">
                                            <Text className="mt-2 ml-2 text-xs text-gray-500">Free Delivery</Text>
                                            <Text className="mt-2  text-xs ml-5 text-gray-500">£14.20 for two</Text>

                                        </View>

                                        


                                    </View>


                                </TouchableOpacity>


                            </View>

                        )

                    })
                }

            </ScrollView>

        </View>
        /*------------------------------------------------------------------------------Order page  card end------------------------------------------------------------------------------------- */
    )
}