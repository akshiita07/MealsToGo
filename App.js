import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsScreen } from './src/features/restaurant/screens/restaurants.screen';

// console.log(StatusBar.currentHeight)   //returns null for ios
export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
