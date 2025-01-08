import { React } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';

// for styling using styled-components:
import styled from 'styled-components/native';

// write as css:
const Title = styled.Text`
    padding:${(props) => props.theme.space[3]};
    fontWeight:${(props) => props.theme.fontWeights.bold};
    fontSize:${(props) => props.theme.fontSizes.title};
    color:${(props) => props.theme.colors.ui.primary};
    font-family:${(props) => props.theme.fonts.body};
    
`;
const RestaurantCard = styled(Card)`
    margin:${(props) => props.theme.space[3]};
`;
const RestaurantCardCover = styled(Card.Cover)`
    backgroundColor:${(props) => props.theme.colors.ui.quaternary};
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
