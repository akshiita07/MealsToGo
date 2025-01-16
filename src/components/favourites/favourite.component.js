import React, { useContext } from "react"
import { FavouritesContext } from "../../services/favourites/favourites.context"
import styled from "styled-components/native"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
    position:absolute;
    top:10px;
    right:10px;
    z-index:9;
`

export const Favourite = () => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)
    return (
        <FavouriteButton>
            <AntDesign name="hearto" size={24} color="red" />
        </FavouriteButton>
    )
}