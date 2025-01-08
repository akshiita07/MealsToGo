import { React } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurants-info.component'

// for styling using styled-components:
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top:${StatusBar.currentHeight}px;
`
const SearchContainer = styled.View`
background-color: green;
`
const ListContainer = styled.View`
 flex: 1;
 background-color: blue;
`

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar
                    mode='view'
                />
            </SearchContainer>
            <ListContainer>
                <RestaurantInfo />
            </ListContainer>
        </SafeArea>
    )
}
