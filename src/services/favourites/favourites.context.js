import React, { createContext, useState, useEffect } from "react"
// npx expo install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {

    const [favourites, setFavourites] = useState([]);      //empty array initially as we dont have favourites when we initially load our apps

    // STORING OUR FAVOURITES ON OUR PHONE:
    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue);
        } catch (e) {
            console.log("Error storing favourites: ", e)
        }
    };

    const loadFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem('@favourites');
            if (value !== null) {
                setFavourites(JSON.parse(value))
            }
        } catch (e) {
            console.log("Error loading favourites: ", e)
        }
    };

    // to load the initial favourites:
    useEffect(() => {
        loadFavourites()
    }, [])

    useEffect(() => {
        saveFavourites(favourites)
    }, [favourites])

    // adding a restaurant to our favourites:
    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])   //set current favourites plus this new rest added
    }

    // removing a restaurant to our favourites:
    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            // if place id matches then do not add this rest in favourites:
            (x) => x.placeId != restaurant.placeId
        )
        setFavourites(newFavourites)
    }

    return (
        <FavouritesContext.Provider value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove,
        }}
        >
            {children}
        </FavouritesContext.Provider>
    )
};