import Intro from './src/screens/Intro';
import {
  useFonts,
  Nunito_900Black_Italic
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_900Black_Italic
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Intro />
  );
}
