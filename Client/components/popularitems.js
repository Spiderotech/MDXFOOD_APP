import { View, Text, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import React from 'react'
import { categories } from '../constants'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice';

export default function Popularitems({ food }) {

    const dispatch=useDispatch();
    const totalItems=useSelector(state=>selectCartItemsById(state,food._id))



    const handleIncrease=()=>{
        dispatch(addToCart({...food}))

    }


    const handleDecrease = () => {
        dispatch(removeFromCart({ _id: food._id })); 
    }



    return (
        
  
        <View className=" mt-3  w-[90%]  bg-white  rounded-lg shadow">
            <TouchableOpacity className=" w-full    flex flex-row   p-2 ">
                <Image style={{ width: 90, height: 100 }}
                    className=" rounded-lg shadow"
                    src={food.image}
                />
                <View className="flex flex-col ml-5 w-52 ">
                    <View className="w-full ">
                        <Text className="mt-2 text-xl">{food.name}</Text>
                        <Text className="mt-2 text-md">{food.description}</Text>
                        <View className="flex flex-row justify-between pl-3 mt-3 items-center">
                            <Text className="mt-2 font-semibold">£{food.price}</Text>
                            <View className="flex-row items-center">
                                <TouchableOpacity 
                                 onPress={handleDecrease}
                                className="P-1 rounded-full bg-red-500">
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />

                                </TouchableOpacity>
                                <Text className="px-3 "> {totalItems.length}</Text>
                                <TouchableOpacity
                                onPress={handleIncrease}
                                 className="P-1 rounded-full bg-red-500">
                                    <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />

                                </TouchableOpacity>

                            </View>

                        </View>


                    </View>


                </View>
            </TouchableOpacity>
        </View>




        /*------------------------------------------------------------------------------Home page popular item card end------------------------------------------------------------------------------------- */
    )
}