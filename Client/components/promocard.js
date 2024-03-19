import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { categories } from '../constants';

export default function Promocard() {
    const [expandedPromos, setExpandedPromos] = useState([]);

    const toggleExpand = (index) => {
        setExpandedPromos((prevExpanded) => {
            const updatedExpanded = [...prevExpanded];
            updatedExpanded[index] = !updatedExpanded[index];
            return updatedExpanded;
        });
    };

    return (
          /*------------------------------------------------------------------------------Offer page promo card start------------------------------------------------------------------------------------- */
        <View className="mt-1">
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingVertical: 2,
                }}
            >
                {categories.map((category, index) => {
                    const isExpanded = expandedPromos[index];
                    return (
                        
                        <View key={index} className="flex justify-center items-center p-3 ">
                            <View className="w-full h-auto rounded-lg shadow bg-white">
                                <View className="w-full h-10 mt-5 flex flex-row justify-between">
                                    <View>
                                        <Image
                                            style={{ width: 90, height: 30 }}
                                            className="rounded-lg shadow ml-3"
                                            src="https://1000logos.net/wp-content/uploads/2023/03/Paytm-logo-768x432.png"
                                        />
                                    </View>
                                    <View className="w-24 h-10 border border-dotted border-red-600 mr-3 flex items-center">
                                        <Text className="text-center mt-2">FREEDLPTM</Text>
                                    </View>
                                </View>
                                <Text className="mt-5 ml-5 font-semibold mb-3">Get Unlimited free delivery using paytm</Text>

                                {/* Expandable area */}
                                {isExpanded && (
                                    <View className="p-3 bg-white text-center">
                                        <Text>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Text>
                                    </View>
                                )}

                                {/* Toggle button */}
                                <TouchableOpacity onPress={() => toggleExpand(index)}>
                                    <View className="">
                                        <Text className="text-black ml-5 mb-5">{isExpanded ? 'Close' : 'Expand'}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
         /*------------------------------------------------------------------------------Offer page promo card end------------------------------------------------------------------------------------- */
    );
}
