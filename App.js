import React from 'react';
import Intro from './src/screens/Intro';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  Nunito_900Black_Italic
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_900Black_Italic
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
              headerTransparent: true,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              title: '',
              headerTransparent: true,
            }}
          />          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
