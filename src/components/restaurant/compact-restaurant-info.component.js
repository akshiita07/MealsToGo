import React from "react"
import { Text } from "../../components/typography/text.component"
import styled from "styled-components/native";
import { restaurantsRequest } from "../../services/restaurants/restaurants.service";
// npx expo install react-native-webview
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';

const CompactImage = styled.Image`
    width:120px;
    height:100px;
    border-radius:10px;
`

const CompactWebView = styled(WebView)`
    width:120px;
    height:100px;
    border-radius:10px;
`

const CompactItem = styled.View`
    padding:10px;
    max-width:120px;
    align-items:center;
`

const isAndroid = Platform.OS === "android"

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    const CorrectImage = isAndroid && isMap ? CompactWebView : CompactImage
    return (
        <CompactItem >
            <CorrectImage source={{ uri: restaurant.photos[0] }} />
            <Text variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </CompactItem >
    )
}