import { React } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurants-info.component'

// for styling using styled-components:
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`
const SearchContainer = styled.View`
    padding:${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.ui.quaternary};
`
const ListContainer = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.ui.quaternary};
`

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 0,

    }
})`background-color: ${(props) => props.theme.colors.ui.quaternary};`

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar
                    mode='view'
                />
            </SearchContainer>
            <RestaurantList
                data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }, { name: 9 }, { name: 10 }]}
                renderItem={() => (<RestaurantInfo />)}
                keyExtractor={(item) => item.name}
            // contentContainerStyle={{ padding: 20 }}
            />

        </SafeArea>
    )
}