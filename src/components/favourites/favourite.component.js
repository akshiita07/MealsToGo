import React, { useContext } from "react"
import { FavouritesContext } from "../../services/favourites/favourites.context"
import styled from "styled-components/native"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
    position:absolute;
    top:25px;
    right:25px;
    z-index:9;
`

export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)
    return (
        <FavouriteButton onPress={
            // if it is not already favourite then add else remove
            () => !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)
        }>
            <AntDesign name={
                isFavourite ? "heart" : "hearto"
            } size={24} color={
                isFavourite ? "red" : "white"
            } />
        </FavouriteButton>
    )
}