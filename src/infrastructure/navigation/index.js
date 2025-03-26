import React, { useContext } from "react"
import { NavigationContainer } from '@react-navigation/native';
// import { View, SafeAreaView, Text } from "react-native"
// navigator:
import { AppNavigator } from './app.navigator'
import { AccountNavigator } from './account.navigator'
import { AuthenticationContext } from "../../services/authentication/authentication.context"


export const Navigation = () => {

    // to know whether user is authenticated or not:
    const { isAuthenticated } = useContext(AuthenticationContext)
    return (

        <NavigationContainer>
            {
                // if user is authenticated then go to app else keep on showing login/register account page
                isAuthenticated ? (<AppNavigator></AppNavigator>) : (
                    <AccountNavigator></AccountNavigator>
                )
            }

        </NavigationContainer>
    )
}