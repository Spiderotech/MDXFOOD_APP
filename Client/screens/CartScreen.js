import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "react-native-feather";
import img from "../assets/images/ramen-noodles.png"
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { selectRestaurant } from '../slices/restaurantSlice';

/*------------------------------------------------------------------------------cart screen start ------------------------------------------------------------------------------------- */

export default function CartScreen() {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const [groupItems, setGroupItems] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item._id]) {
        group[item._id].push(item);
      } else {
        group[item._id] = [item]
      }
      return group
    }, {})
    setGroupItems(items)

  }, [cartItems])

  const handleOrder = () => {
    const orderDetails = {
      restaurantId: restaurant._id,
      items: cartItems.map(item => ({ id: item._id, name: item.name, quantity: groupItems[item._id].length })),
      totalPrice: cartTotal
    };
    console.log("Order Details:", orderDetails);
  }

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          className="absolute top-10 left-4 w-12 h-12  bg-red-500 border-gray-200 shadow-lg rounded-lg flex justify-center items-center"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft height={26} width={26} stroke="black" className="" />

        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-lg ">Your cart</Text>
          <Text className="text-center text-gray-500"> {restaurant.name}</Text>

        </View>


      </View>
      <View className=" flex-row px-10 items-center mt-5 bg-red-200 h-20">
        <Image
          className="rounded-lg shadow w-10 h-10 ml-9"
          source={img}
        />
        <Text className="flex-1 pl-4 font-semibold">
          Prepare in 20-30 minute

        </Text>

      </View>

      {cartItems.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Your cart is empty</Text>
        </View>
      ) : (
        <>
          {/* Render cart items */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 50
            }}
            className="bg-white pt-5"
          >
            {Object.entries(groupItems).map(([key, items]) => {
              let dish = items[0];
              return (
                <View key={key} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg shadow-black">
                  <Text className="font-bold text-black">{items.length}x</Text>
                  <Image className="h-14 w-14 rounded-full" source={dish.image} />
                  <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                  <Text className="flex-1 font-semibold text-base">$ {dish.price}</Text>
                  <TouchableOpacity onPress={() => dispatch(removeFromCart({ _id: dish._id }))} className="p-1 rounded-full bg-red-500">
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>

          {/* Cart totals */}
          <View className="p-6 px-8 rounded-t-3xl space-y-4 bg-red-400">
            <View className="flex-row justify-between">
              <Text className="text-zinc-700">Subtotal</Text>
              <Text className="text-zinc-700">${cartTotal}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-zinc-700 font-extrabold">Order Total</Text>
              <Text className="text-zinc-700 font-extrabold">${cartTotal}</Text>
            </View>
            <View >
          <TouchableOpacity

            onPressIn={handleOrder}
            className="bg-red-500 P-5 h-10 justify-center rounded-full">
            <Text className="text-white text-center font-bold text-lg">

              Place Order

            </Text>

          </TouchableOpacity>

        </View>
          </View>
        </>
      )}
    </View>
  )
}

/*------------------------------------------------------------------------------cart screen end ------------------------------------------------------------------------------------- */


/*------------------------------------------------------------------------------cart screen end ------------------------------------------------------------------------------------- */



