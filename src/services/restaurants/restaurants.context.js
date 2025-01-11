// react context
// retrieve restaurants from d specific cities & pass them by context
// service->context->app
import React, { useState, createContext, useEffect, useMemo } from "react"
import { restaurantsRequest, restaurantsTransform } from "./restaurants.service"

export const RestaurantContext = createContext();

// it will wrap the app & provides it certain state
export const RestaurantContextProvider = ({ children }) => {
    return (
        <RestaurantContext.Provider
            value={
                { restaurants: [1, 2, 3] }
            }
        >
            {children}
        </RestaurantContext.Provider>
    )
}