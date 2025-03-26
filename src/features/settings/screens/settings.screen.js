import React, { useContext } from "react";
import { SafeAreaView } from 'react-native';
import { Button, List } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const SettingsScreen = ({ navigation }) => {
    const { onLogout } = useContext(AuthenticationContext);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <List.Section>
                {/* add favourites button */}
                <List.Item
                    style={{
                        padding: 16
                    }}
                    title="Favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => { console.log("User wants to view favourites"); navigation.navigate("Favourites"); }}>
                </List.Item>

                {/* add logout button */}
                <List.Item
                    style={{
                        padding: 16
                    }}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="logout" />}
                    onPress={() => { console.log("User wants to log out"); onLogout(); }}>
                </List.Item>
            </List.Section>

        </SafeAreaView >
    );
}