import React from "react"
// as layered stacks: 
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
import { SettingsScreen } from "../../features/settings/screens/settings.screen"

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            //  to see titles of these screens:
            headerMode="screen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    header: () => null
                }}
            />
            <SettingsStack.Screen
                name="Favourites"
                component={() => null}
                options={{
                    header: () => null
                }}
            />

        </SettingsStack.Navigator>
    )
}