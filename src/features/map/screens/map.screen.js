// npx expo install react-native-maps
// yarn add react-native-maps
import React, { useContext, useState, useEffect } from 'react';
import { MapCallout } from '../components/map-callout.component';
import MapView, { Marker, Callout } from 'react-native-maps';
import { TouchableOpacity } from 'react-native';
import { Search } from '../components/search.component';
import styled from "styled-components/native";

import { RestaurantContext } from '../../../services/restaurants/restaurants.context'
import { LocationContext } from '../../../services/location/location.context'

const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`

export const MapScreen = ({ navigation }) => {
    // console.log(navigation)

    // to render out restaurants:
    const { location } = useContext(LocationContext)
    const { restaurants = [] } = useContext(RestaurantContext)

    // to figure out where to render map markers:
    const [latDelta, setLatDelta] = useState(0);
    // "viewport": { "northeast": {"lat":,"lng":},"southwest": {"lat":"lng":}}
    const { lat, lng, viewport } = location;

    // console.log(viewport)
    // console.log(viewport.northeast)

    useEffect(() => {
        const northEastLat = viewport.northeast.lat;
        const southWestLat = viewport.southwest.lat;
        const calculatedLatDelta = northEastLat - southWestLat
        setLatDelta(calculatedLatDelta)
    }, [location, viewport])

    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,    //a default zoom view of 0.02
                }}
            >
                {restaurants.map((restaurant) => {
                    return <Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng,
                        }}
                    >
                        <Callout onPress={() =>
                            navigation.navigate("RestaurantDetail", {
                                restaurant: restaurant,
                            })
                        }
                        >
                            <MapCallout
                                restaurant={restaurant}
                            >

                            </MapCallout>

                        </Callout>

                    </Marker>;
                })}
            </Map >
        </>
    );
}