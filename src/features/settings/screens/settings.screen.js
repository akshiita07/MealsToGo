import React, { useContext, useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar, List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SettingsItem, AvatarContainer } from "../components/settings.style";

// camera:
// to retrieve images:
import AsyncStorage from '@react-native-async-storage/async-storage';


export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);

    const [photo, setPhoto] = useState(null);
    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
    }
    //as and when the user changes get a new profile photo each time:
    useFocusEffect(() => {
        getProfilePicture(user);
    }, [user]);

    return (
        <SafeAreaView >
            <AvatarContainer>
                {/* Here in the icon i want to show camera image */}
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {/* if we dont have a profile photo then render avatar else render the profile pic */}
                    {!photo && <Avatar.Icon
                        size={150}
                        icon="human"
                        backgroundColor="#2182BD"
                    >
                    </Avatar.Icon>}
                    {photo && <Avatar.Image
                        size={150}
                        source={{ uri: photo }}
                        backgroundColor="#2182BD"
                    >
                    </Avatar.Image>}

                </TouchableOpacity>

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