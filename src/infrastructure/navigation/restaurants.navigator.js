import React from "react"
import { Text } from "react-native"
import { RestaurantsScreen } from '../../../src/features/restaurant/screens/restaurants.screen';

// as layered stacks: 
import { createStackNavigator } from "@react-navigation/stack"

const RestaurantStack = createStackNavigator()

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>

            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
            >
            </RestaurantStack.Screen>


        </RestaurantStack.Navigator>
    )
}