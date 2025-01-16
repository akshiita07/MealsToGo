import React, { createContext, useState } from "react"

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {

    const [favourites, setFavourites] = useState([]);      //empty array initially as we dont have favourites when we initially load our apps

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