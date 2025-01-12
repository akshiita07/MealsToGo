import React from "react"
import { Text, View } from 'react-native';

import { RestaurantNavigator } from './restaurants.navigator'

// NAVIGATION:
// yarn add @react-navigation/native
// yarn add react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-get-random-values react-native-vector-icons
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// for adding icons to bottom navbar:
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Restaurants"
                    component={RestaurantNavigator}
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
    )
}
