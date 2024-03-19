import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../slices/cartSlice'


export default function CartIcon() {
    const navigation = useNavigation()
    const catrtItems=useSelector(selectCartItems)
    const cartTotal=useSelector(selectCartTotal)
    if(!catrtItems.length) return;

  return (
    <View className="absolute  -bottom-20 w-full  z-50 ">
      <TouchableOpacity
      onPress={()=>  navigation.navigate('Cart')}
      className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg bg-red-500"
      >
        <View  className="p-2 px-4 rounded-full  bg-red-400 ">
            <Text className="font-extrabold text-white text-lg">
              {catrtItems.length}
            </Text>

        </View>
        <Text className="flex-1 text-center font-bold text-lg text-white">
            View Cart

        </Text>
        <Text className=" font-bold text-lg text-white">
            ${cartTotal}

        </Text>

      </TouchableOpacity>
    </View>
  )
}