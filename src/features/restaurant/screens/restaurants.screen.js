import React, { useContext } from 'react'
import { FlatList, Pressable, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { RestaurantInfo } from '../components/restaurants-info.component'
import { SafeArea } from '../../../components/utility/safe-area.component';

// for styling using styled-components:
import styled from 'styled-components/native';

// service:
import { RestaurantContext } from '../../../../src/services/restaurants/restaurants.context'
import { FavouritesContext } from '../../../../src/services/favourites/favourites.context'

// whenever loading then show symbol:
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

// search bar:
import { Search } from '../components/search.component'

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 0,
    },
})`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const LoadingOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);  /* Optional: adds a translucent background */
`;

export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, error, restaurants } = useContext(RestaurantContext);
    // console.log(navigation)
    const { favourites } = useContext(FavouritesContext);
    // console.log(favourites)

    return (

        <SafeArea>
            <ListContainer>
                {isLoading && (
                    <LoadingOverlay>
                        <ActivityIndicator size={50} animating={true} color={MD2Colors.blue800} />
                    </LoadingOverlay>
                )}

                <Search />
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                            restaurant: item,
                        })}>
                            <RestaurantInfo restaurant={item} />
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.name}
                />
            </ListContainer>
        </SafeArea>
    );
};
