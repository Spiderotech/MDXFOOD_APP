import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { categories } from '../constants'

export default function Categories() {
  return (
     /*------------------------------------------------------------------------------home page  top category card start------------------------------------------------------------------------------------- */
    <View className="mt-2">
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
            paddingHorizontal:15

        }}
        >
            {
                categories.map((category,index)=>{
                    return(
                        <View key={index} className="flex justify-center items-center mr-5 mt-3">
                            <TouchableOpacity className="p-1">
                                <Image style={{ width:100 , height:65}}

                                className=" rounded-lg shadow bg-gray-200"

                               src='https://thumbs.dreamstime.com/b/closeup-two-homemade-burgers-made-%C3%A2%E2%82%AC%E2%80%B9%C3%A2%E2%82%AC%E2%80%B9from-fresh-vegetables-old-wooden-table-30033887.jpg'
                                
                                />
                              

                            </TouchableOpacity>
                            <Text className="mt-1 font-medium">{category.name}</Text>

                        </View>

                    )

                })
            }

        </ScrollView>
      
    </View>
    /*------------------------------------------------------------------------------home page  top category card end------------------------------------------------------------------------------------- */
  )
}