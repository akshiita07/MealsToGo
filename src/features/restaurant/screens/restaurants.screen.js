﻿import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { RestaurantInfo } from '../components/restaurants-info.component'
import { SafeArea } from '../../../components/utility/safe-area.component';

// for styling using styled-components:
import styled from 'styled-components/native';

// service:
import { RestaurantContext } from '../../../../src/services/restaurants/restaurants.context'
import { FavouritesContext } from '../../../../src/services/favourites/favourites.context'
import { FavouritesBar } from '../../../../src/components/favourites/favourites-bar.component'

// whenever loading then show symbol:
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

// search bar:
import { Search } from '../components/search.component'

// for animations:
import { FadeInView } from '../../../components/animations/fade.animation'

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`

import { RestaurantList } from '../components/restaurant-list.styles.js'

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
    const [isToggled, setAsToggled] = useState(false)

    return (

        <SafeArea>
            <ListContainer>
                {isLoading && (
                    <LoadingOverlay>
                        <ActivityIndicator size={50} animating={true} color={MD2Colors.blue800} />
                    </LoadingOverlay>
                )}

                <Search
                    isFavouritesToggled={isToggled}
                    onFavouritesToggle={
                        // invert is toggled whenever it is clicked
                        () => setAsToggled(!isToggled)
                    } />

                {
                    isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
                }

                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                            restaurant: item,
                        })}>
                            <FadeInView>
                                <RestaurantInfo restaurant={item} />
                            </FadeInView>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.name}
                />
            </ListContainer>
        </SafeArea >
    );
};
