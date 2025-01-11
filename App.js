// yarn expo start -c
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurant/screens/restaurants.screen';

// theme:
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index'

// expo google fonts package: expo install expo-font
// expo install @expo-google-fonts/name_of_font ie oswald/lato
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// NAVIGATION:
// yarn add @react-navigation/native
// yarn add react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-get-random-values react-native-vector-icons
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// for adding icons to bottom navbar:
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// SERVICES:
import { restaurantsRequest } from './src/services/restaurants/restaurants.service'
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context'

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

// console.log(StatusBar.currentHeight)   //returns null for ios
export default function App() {
  // load fonts here:
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="fast-food-sharp" size={24} color="black" />
                  ),
                }}
              />
              <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="map-marked-alt" size={24} color="black" />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="settings" size={24} color="black" />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
