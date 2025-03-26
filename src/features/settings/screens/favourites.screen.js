import React, { useContext } from "react";
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text } from "../../../components/typography/text.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../../restaurant/components/restaurant-list.styles"
import { FavouritesArea } from "../components/favourites.style";
import { RestaurantInfo } from "../../restaurant/components/restaurants-info.component";

export const FavouritesScreen = ({ navigation }) => {
    const { favourites } = useContext(FavouritesContext);

    // check if favourites exist then render something else render something else
    return favourites.length ? (
        // With the favourites array render restaurant card components:
        <SafeAreaView >

            <Text variant="label" style={{ textAlign: 'center' }}>
                Your Favourites
            </Text>

            <RestaurantList
                // here data is favourites:
                data={favourites}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                        restaurant: item,
                    })}>
                        <RestaurantInfo restaurant={item} />
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.name}
            />

        </SafeAreaView >
    ) : (
        // With the favourites array render restaurant card components:
        <FavouritesArea >

            <Text variant="label">
                Add Favourite Restaurants to view here!
            </Text>

        </FavouritesArea >
    );
}