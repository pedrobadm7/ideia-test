import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import {ThemeProvider} from 'styled-components'
import {
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['expo-app-loading is deprecated in favor of expo-splash-screen: use SplashScreen.preventAutoHideAsync() and SplashScreen.hideAsync() instead.'])

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
   <ThemeProvider theme={theme} >
      <Dashboard />
   </ThemeProvider>
  );
}
