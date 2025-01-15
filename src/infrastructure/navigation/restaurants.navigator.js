import React from "react"
import { RestaurantDetailScreen } from "../../features/restaurant/screens/restaurants-detail.screen"
import { RestaurantsScreen } from '../../../src/features/restaurant/screens/restaurants.screen';

// as layered stacks: 
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

const RestaurantStack = createStackNavigator()

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions=
            {
                {
                    // so that details go from bottom (not left to right default)
                    ...TransitionPresets.ModalPresentationIOS,
                    headerShown: false
                }
            }>

            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
            >
            </RestaurantStack.Screen>


            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            >
            </RestaurantStack.Screen>


        </RestaurantStack.Navigator>
    )
}