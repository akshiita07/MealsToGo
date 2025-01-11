import React, { useContext } from 'react'
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurants-info.component'
import { SafeArea } from '../../../components/utility/safe-area.component';

// for styling using styled-components:
import styled from 'styled-components/native';

// service:
import { RestaurantContext } from '../../../../src/services/restaurants/restaurants.context'

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
    const restaurantContext = useContext(RestaurantContext);
    console.log(restaurantContext)
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar
                    mode='view'
                />
            </SearchContainer>
            <RestaurantList
                // data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }, { name: 9 }, { name: 10 }]}
                data={restaurantContext.restaurants}
                renderItem={() => (<RestaurantInfo />)}
                keyExtractor={(item) => item.name}
            // contentContainerStyle={{ padding: 20 }}
            />

        </SafeArea>
    )
}