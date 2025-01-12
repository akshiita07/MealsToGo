// yarn add camelize:
import camelize from "camelize"

// to get our mock locations:
import { locations } from './location.mock'

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        //  mimic as we are talking to an API
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("Location not found")
        }
        resolve(locationMock)
    })
}

export const locationTransform = (result) => {
    // const location = result.results[0];       //as it is an array
    // console.log(location)

    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];       //as it is an array
    const { lat, lng } = geometry.location;       //as it is an array
    return { lat, lng }
}