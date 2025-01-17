import React from "react"
import { ScrollView, TouchableOpacity } from "react-native"   //for a horizontal navigator
import styled from "styled-components/native"
import { Spacer } from "../spacer/spacer.component"
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component"
import { Text } from '../typography/text.component';

const FavouritesWrapper = styled.View`
    padding:10px;
`

export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null;
    }
    return (
        <FavouritesWrapper>
            <Spacer position="left" size="medium">
                <Text variant="label">
                    Your favourites:
                </Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name;
                        return (
                            <Spacer key={key} position="left" size="medium">
                                <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", {
                                    restaurant: restaurant,
                                })}>
                                    <CompactRestaurantInfo restaurant={restaurant}>

                                    </CompactRestaurantInfo>
                                </TouchableOpacity>
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </FavouritesWrapper>
    )
}