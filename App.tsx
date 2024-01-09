import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/index';
import { StatusBar } from 'react-native';

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

import { Home } from '@screens/Home';
import { Loader } from '@components/Loader';
import { Statistics } from '@screens/Statistics';
import { NewMeal } from '@screens/NewMeal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feedback } from '@screens/Feedback';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Feedback type="positive" /> : <Loader />}
    </ThemeProvider>
  );
}
