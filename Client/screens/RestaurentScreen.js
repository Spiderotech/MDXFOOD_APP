import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native'
import Popularitems from '../components/popularitems';
import {useEffect,useState} from 'react'
import axios from "../Utils/restaurant/axios"
import CartIcon from '../components/carticon';
import { UseDispatch, useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';
/*------------------------------------------------------------------------------Restaurant screen  start ------------------------------------------------------------------------------------- */

export default function RestaurentScreen({ route }) {
    const { restaurantData } = route.params;
   
    const navigation = useNavigation()
    const dispatch=useDispatch()
    const [food, setFood] = useState([]);


    const id=restaurantData._id

    useEffect(() => {
       
        dispatch(setRestaurant(restaurantData));

     
        const fetchFoodData = async () => {
            try {
                const response = await axios.get("/getallfood?id=" + id);
                setFood(response.data.fooddata);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchFoodData();
    }, [dispatch, restaurantData]);
    return (
        <View>
          
            <ScrollView>
                <View className="relative">
                    <Image className=" w-full h-60"
                        src={restaurantData.restaurantImage}
                    />
                    <TouchableOpacity
                        className="absolute top-10 left-4 w-12 h-12 bg-white border-gray-200 shadow-lg rounded-lg flex justify-center items-center"
                        onPress={() => navigation.goBack()}
                    >
                        <Icon.ArrowLeft height={26} width={26} stroke="black" className="" />

                    </TouchableOpacity>

                </View>
                <View className=" bg-white w-[90%] ml-5 h-auto rounded-lg shadow -mt-12  ">
                    <View className="w-full h-10  mt-4 flex flex-row justify-between ">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="mt-2 ml-2 text-xl">{restaurantData.name}</Text>
                            <Icon.Circle height={26} width={26} stroke="red" className=" mt-2 ml-2" />
                            <Icon.Circle height={26} width={26} stroke="red" className="mt-2 ml-2" />
                        </View>
                        <View>
                            <Icon.Heart height={26} width={26} stroke="red" className=" mt-2 mr-3" />

                        </View>

                    </View>
                    <Text className="mt-1 ml-2 font-medium text-gray-500">{restaurantData.location}</Text>

                    <Text className="mt-3 ml-2 text-xs mb-10">40-45 Minutes(Delivery time )</Text>

                </View>
                <ScrollView >
                    <View className="flex justify-center items-center ">
                    {food.map((foods, index) => (
                        <Popularitems key={index} food={foods} />
                    ))}
                        

                    </View>

                </ScrollView>
            </ScrollView>
            <CartIcon/>
        </View>
    )
}
/*------------------------------------------------------------------------------Restaurant  screen  end ------------------------------------------------------------------------------------- */