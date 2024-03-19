import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categories } from '../constants'
import * as Icon from "react-native-feather";

export default function Offercard2() {
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
                            <View key={index} className="flex justify-center items-center mr-5 mt-3  rounded-lg">
                                <TouchableOpacity className=" rounded-lg shadow  flex flex-col  ">

                                    <Image style={{ width: 150, height: 100 }}
                                        className=" rounded-lg "

                                        src='https://thekitchencommunity.org/wp-content/uploads/2021/09/shutterstock_138421859-steak.jpg'

                                    />
                                    <View className=" flex flex-col w-auto ">
                                        <View className=" flex flex-row w-auto justify-between ">
                                            <Text className="mt-2 ml-2 text-sm">McDonald</Text>
                                            <View className=" flex flex-row w-auto " >
                                            <Icon.Star height={18} width={18} stroke="#f5c242" fill="#f5c242" className="mt-2 mr-1" />
                                            <Text className="mt-2  text-sm">4.1</Text>

                                            </View>
                                           

                                        </View>
                                        <View className=" flex flex-row w-auto justify-between ">
                                            <Text className="mt-2 ml-2 text-xs">40-45 mins</Text>
                                            <Text className="mt-2  text-xs">£14.20 </Text>

                                        </View>


                                


                                    </View>


                                </TouchableOpacity>


                            </View>

                        )

                    })
                }

            </ScrollView>

        </View>
         /*------------------------------------------------------------------------------Offer page card end------------------------------------------------------------------------------------- */
    )
}