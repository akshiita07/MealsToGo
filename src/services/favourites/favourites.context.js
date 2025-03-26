import React, { createContext, useState, useEffect, useContext } from "react"
// npx expo install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    //get user:
    const { user } = useContext(AuthenticationContext);
    const [favourites, setFavourites] = useState([]);      //empty array initially as we dont have favourites when we initially load our apps

    // STORING OUR FAVOURITES ON OUR PHONE:
    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
            // add user identifier to link with favourites
        } catch (e) {
            console.log("Error storing favourites: ", e)
        }
    };

    const loadFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`);
            if (value !== null) {
                setFavourites(JSON.parse(value))
            } else {
                setFavourites([])

            }
        } catch (e) {
            console.log("Error loading favourites: ", e)
        }
    };

    // to load the initial favourites:
    // + reload favourites according to user session
    // useEffect(() => {
    //     if (user && user.uid) {
    //         loadFavourites(user.uid)
    //     }
    // }, [user])
    useEffect(() => {
        if (user?.uid) {
            loadFavourites(user.uid);
        }
    }, [user]);


    // useEffect(() => {
    //     if (user && user.uid && favourites.length) {
    //         saveFavourites(favourites, user.uid)
    //     }
    // }, [favourites, user])
    useEffect(() => {
        if (user?.uid && favourites.length) {
            saveFavourites(favourites, user.uid);
        }
    }, [favourites, user]);

    // useEffect(() => {
    //     if (user?.uid) {
    //         loadFavourites(user.uid);
    //     } else {
    //         setFavourites([]); // Clear favourites when no user is logged in
    //     }
    // }, [user]);

    // debgugging log:
    // useEffect(() => {
    //     const checkStorage = async () => {
    //         const storedFavourites = await AsyncStorage.getItem(`@favourites-${user?.uid}`);
    //         console.log("Stored Favourites:", storedFavourites);
    //     };
    //     checkStorage();
    // }, [user]);


    // adding a restaurant to our favourites:
    const add = (restaurant) => {
        if (!favourites.some((fav) => fav.placeId === restaurant.placeId)) {
            setFavourites([...favourites, restaurant]);   //set current favourites plus this new rest added
        }
    };


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