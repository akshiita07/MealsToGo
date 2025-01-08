import { React } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';

// for styling using styled-components:
import styled from 'styled-components/native';

// write as css:
const Title = styled.Text`
    padding:16px;
    fontWeight:bold;
    fontSize:18px;
`;
const RestaurantCard = styled(Card)`
    margin:20px;
`;
const RestaurantCardCover = styled(Card.Cover)`
    backgroundColor:white;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
    // restaurant is the object whoose porperties we want to take:
    const { name = "Some Restaurant", icon, photos = ["https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"], address = "#46 Savitry", isOpenNow = true, rating = 4, isClosed = false } = restaurant;
    return (
        // <Text>Restaurant Name: {name}</Text>
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name} </Title>
        </RestaurantCard>
    )
}
