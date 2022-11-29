import Intro from './src/screens/Intro';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Nunito_900Black_Italic
} from '@expo-google-fonts/nunito';

import AppLoading from 'expo-app-loading';
import Login from './src/screens/Login';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_900Black_Italic
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <NavigationContainer>
      {/* <Intro /> */}
      <Login />
    </NavigationContainer>
  );
}
