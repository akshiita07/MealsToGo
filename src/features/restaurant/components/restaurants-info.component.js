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

export const RestaurantInfo = ({ restaurant = {} }) => {
    // restaurant is the object whoose porperties we want to take:
    const { name = "Some Restaurant", icon, photos = ["https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"], address = "#46 Savitry", isOpenNow = true, rating = 4, isClosed = false } = restaurant;
    return (
        // <Text>Restaurant Name: {name}</Text>
        <Card elevation={5} style={styles.cardCntr}>
            <Card.Cover key={name} style={styles.coverPhoto} source={{ uri: photos[0] }} />
            {/* <Card.Title style={styles.restText} title={name} /> */}
            <Title>{name} </Title>
            {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions> */}
        </Card>
    )
}

const styles = StyleSheet.create({
    restText: {
        fontSize: 70,
        fontWeight: 'bold',
    },
    cardCntr: {
        margin: 20,
        // backgroundColor: "green"
    },
    coverPhoto: {
        // backgroundColor: "pink"

    }
});