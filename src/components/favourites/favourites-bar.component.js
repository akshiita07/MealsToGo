import React from "react"
import { ScrollView } from "react-native"   //for a horizontal navigator
import styled from "styled-components/native"
import { Spacer } from "../spacer/spacer.component"
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component"

const FavouritesWrapper = styled.View`
    padding:10px;
`

export const FavouritesBar = ({ favourites }) => {
    return (
        <FavouritesWrapper>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name;
                        return (
                            <Spacer key={key} position="left" size="medium">
                                <CompactRestaurantInfo restaurant={restaurant}>

                                </CompactRestaurantInfo>
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </FavouritesWrapper>
    )
}