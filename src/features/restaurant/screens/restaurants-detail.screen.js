import React from "react"
import { RestaurantInfo } from '../components/restaurants-info.component'
import { SafeArea } from '../../../components/utility/safe-area.component'

export const RestaurantDetailScreen = ({ route }) => {
    const restaurant = route.params.restaurant;

    return (
        <SafeArea>
            <RestaurantInfo restaurant={restaurant}>

            </RestaurantInfo>
        </SafeArea>
    )
}