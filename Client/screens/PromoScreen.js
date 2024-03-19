import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Promocard from '../components/promocard'
/*------------------------------------------------------------------------------Profile screen  end  ------------------------------------------------------------------------------------- */

export default function PromoScreen() {
  return (
    <SafeAreaView className="h-full bg-[#f3f3f3]">
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Promocard/>
      </ScrollView>
    </SafeAreaView>
  )
}
/*------------------------------------------------------------------------------Profile screen  start  ------------------------------------------------------------------------------------- */