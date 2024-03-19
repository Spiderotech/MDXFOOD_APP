import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native'
import * as Icon from "react-native-feather";
import React,{useEffect,useState} from 'react'
import Categories from '../components/categories';
import Popularitems from '../components/popularitems';
import Itemcard from '../components/itemcard';
import axios from "../Utils/restaurant/axios"

/*------------------------------------------------------------------------------ Home screen  start ------------------------------------------------------------------------------------- */

export default function HomeScreen() {
    const [resturant, setresturant] = useState([]);


    useEffect(() => {
      
        axios
          .get("/getallresturant")
          .then((response) => {
           
            setresturant(response.data.allresturant);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }, []);

      

    return (
        <SafeAreaView className="h-full bg-[#f3f3f3]">
            <StatusBar barStyle="dark-content" />
            <View className="flex-row   w-[90%] h-14 m-5 ">
                <View className="w-12 h-12 bg-white border-gray-200 shadow-lg rounded-lg flex justify-center items-center ">
                    <Icon.MapPin height={26} width={26} stroke="black" className="" />

                </View>
                <View className="flex-row flex-1 items-center w-[80%] h-12  ml-2 border-gray-200 shadow-lg rounded-lg bg-white justify-between ">
                    <TextInput className="text-gray-600 ml-5" placeholder='Search for meals or area' />
                    <Icon.Search height={25} width={25} stroke="black" className=" mr-5" />

                </View>

            </View>
            <ScrollView>

                
               
                <View className=" w-[90%]  m-5">
                    <View className="flex flex-row justify-between items-center">
                        <Text className="text-2xl font-semibold">Nearby Restaurant</Text>
                       

                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>

                    {resturant.map((restaurants, index) => (
                        <Itemcard key={index} restaurant={restaurants} />
                    ))}



                    </ScrollView>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

/*------------------------------------------------------------------------------ Home screen end  ------------------------------------------------------------------------------------- */