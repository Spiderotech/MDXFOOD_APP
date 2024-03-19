import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import CountryPicker from 'react-native-country-picker-modal';

export default function RegisterScreen() {
  const navigation = useNavigation()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('GB');

  return (
    <SafeAreaView className="flex flex-1 bg-gray-100">
      <StatusBar barStyle="" />
      <View className="flex flex-1 justify-center items-center">
        <View className="justify-center items-center">
          <Text className="text-2xl font-bold mb-4 text-black text-center">Create new Account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-base mb-4 text-black">Already Registered? Log in here</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8">
          <Text className="text-base text-black">NAME</Text>
          <TextInput placeholder="Enter name" style={{ width: 300, height: 50, marginTop: 8, marginBottom: 12, borderColor: 'black', borderWidth: 1, paddingLeft: 8 }} />
          <Text className="text-base text-black">EMAIL</Text>
          <TextInput keyboardType="email-address" placeholder="Enter email address" style={{ width: 300, height: 50, marginTop: 8, marginBottom: 12, borderColor: 'black', borderWidth: 1, paddingLeft: 8 }} />
          <Text className="text-base text-black">PASSWORD</Text>
          <TextInput secureTextEntry={true} placeholder="Enter password" style={{ width: 300, height: 50, marginTop: 8, marginBottom: 12, borderColor: 'black', borderWidth: 1, paddingLeft: 8 }} />

          <Text style={{ fontSize: 16, color: 'black' }}>PHONE NUMBER</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 300, height: 50, marginTop: 8, marginBottom: 12, borderColor: 'black', borderWidth: 1 }} >
            <CountryPicker
              withFlag
              withCallingCode
              withFilter
              countryCode={countryCode}
              onSelect={(country) => setCountryCode(country.cca2)}
              visible
            />
            <TextInput
              placeholder="Enter phone number"
              style={{ flex: 1, height: '100%', paddingLeft: 8 }}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>

          <TouchableOpacity
            style={{ backgroundColor: 'black', width: 300, height: 50, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('HomeTabs')}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
