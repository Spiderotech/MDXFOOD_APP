import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Itemcard({ restaurant }) {
    const navigation = useNavigation()
    const handlePress = () => {
      
        const restaurantData=restaurant;
       
        navigation.navigate('Restaurant', {restaurantData});
    };
    return (
        /*------------------------------------------------------------------------------home page  item  card start------------------------------------------------------------------------------------- */
        <View className="mt-2">
            <ScrollView
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 15

                }}
            >
                <View className="flex justify-center items-center  mt-3">
                <TouchableOpacity
                        style={{ width: '100%', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#fff', padding: 10 }}
                        onPress={handlePress}
                    >

                        <Image style={{ width: 300, height: 180 }}
                            className=" rounded-lg shadow"

                            src={restaurant.restaurantImage}

                        />
                        <View className="w-40  flex flex-col ">
                            <Text className="mt-2 ml-2 text-xl">{restaurant.name}</Text>

                            <Text className="mt-1 ml-2 font-medium text-gray-500">{restaurant.location}</Text>

                            <Text className="mt-2 ml-2 font-semibold">{restaurant.email}</Text>

                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
        /*------------------------------------------------------------------------------home page  item  card end------------------------------------------------------------------------------------- */
    )
}