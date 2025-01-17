import React, { useContext, useState, useEffect } from 'react';
import styled from "styled-components/native";
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component'

const MyText = styled.Text`
`

export const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo isMap restaurant={restaurant}>

        </CompactRestaurantInfo>
    )

}