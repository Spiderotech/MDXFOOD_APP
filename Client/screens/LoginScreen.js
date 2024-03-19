import { View, Text, SafeAreaView, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import CountryPicker from 'react-native-country-picker-modal';

/*------------------------------------------------------------------------------Login  screen  start  ------------------------------------------------------------------------------------- */

export default function LoginScreen() {
  const navigation = useNavigation()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('GB');
  const [password, setPassword] = useState('');

  const handleEmailPasswordLogin = () => {
    
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f2f2' }}>
    <StatusBar barStyle="" />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: 'black', textAlign: 'center' }}>Login</Text>
        <Text style={{ fontSize: 16, marginBottom: 12, color: 'black' }}>Sign in to continue</Text>
      </View>

      <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, color: 'black' }}>PHONE NUMBER</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 300, height: 50, marginTop: 8, marginBottom: 12, borderColor: 'black', borderWidth: 1 }}>
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
        <Text style={{ fontSize: 16, color: 'black' }}>PASSWORD</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter password"
          style={{ width: 300, height: 50, marginTop: 8, marginBottom: 12, borderColor: 'black', borderWidth: 1 }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ fontSize: 16, marginBottom: 12, color: 'black' }}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: 'black', width: 300, height: 50, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
          onPress={handleEmailPasswordLogin}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ fontSize: 16, marginTop: 20, color: 'black' }}>Don't have an account? Sign up here</Text>
        </TouchableOpacity>

        
       
      </View>
    </View>
  </SafeAreaView>

  )
} 

/*------------------------------------------------------------------------------Login  screen  end  ------------------------------------------------------------------------------------- */