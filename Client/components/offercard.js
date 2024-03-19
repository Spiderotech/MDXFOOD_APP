import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { categories } from '../constants'

export default function Offercard() {
  return (
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
                 /*------------------------------------------------------------------------------Offer page top  card start------------------------------------------------------------------------------------- */
                return(
                    <View key={index} className="flex justify-center items-center mr-5 mt-3">
                        <TouchableOpacity className=" rounded-lg shadow bg-white flex flex-row w-auto ">

                            <Image style={{ width:260 , height:130}}
                            className=" rounded-lg shadow"

                            src='https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg'
                            
                            />
                           
                        
                        </TouchableOpacity>
                       

                    </View>

                )

            })
        }

    </ScrollView>
  
</View>
 /*------------------------------------------------------------------------------Offer page top  card end------------------------------------------------------------------------------------- */
  )
}