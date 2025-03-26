import React, { useContext } from "react";
import { SafeAreaView } from 'react-native';
import { Avatar, List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SettingsItem, AvatarContainer } from "../components/settings.style";

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);

    return (
        <SafeAreaView >
            <AvatarContainer>
                <Avatar.Icon
                    size={150}
                    icon="human"
                    backgroundColor="#2182BD"
                >

                </Avatar.Icon>

                <Spacer position="top" size="large">
                    <Text variant="label" style={{ textAlign: 'center' }}>
                        Welcome
                    </Text>
                    <Text variant="label" style={{ color: "#2182BD" }}>
                        {user.email}
                    </Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                {/* add favourites button */}
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => { console.log("User wants to view favourites"); navigation.navigate("Favourites"); }}>
                </SettingsItem>

                {/* add logout button */}
                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="logout" />}
                    onPress={() => { console.log("User wants to log out"); onLogout(); }}>
                </SettingsItem>
            </List.Section>

        </SafeAreaView >
    );
}