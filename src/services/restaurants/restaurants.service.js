﻿import { mocks, mockImages } from "./mock"

// yarn add camelize:
import camelize from "camelize"

// added a default location of san fransico in location:
export const restaurantsRequest = (location) => {
    // console.log(mocks[location]);   //mock of a location
    // Promise that u will be getting something back in d future
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject("Location not found")
        }
        resolve(mock)
    });
}

// console.log(result)      //will return in format: opening-hours
// console.log(camelize(result))      //will return in camel case format: openingHours
export const restaurantsTransform = ({ results = [] }) => {
    // 1. results array to be mapped:
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        })
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours?.open_now || false,
            isClosed: restaurant.business_status === "CLOSED_TEMPORARILY",
            address: restaurant.vicinity
            // photo translations:
        };
    })
    // console.log(mappedResults)
    // 1. camel case:
    // const newResult=camelize(results.length)
    return camelize(mappedResults)
}

// whenever we use promise we use .then() ie restaurant request will not return immediately but sometime in d future
restaurantsRequest().then(restaurantsTransform).then((transformedResponse) => {
    // console.log(transformedResponse)
}).catch((err) => {
    console.log("Error occurred as location not found")
});