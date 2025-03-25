import React from "react";
import { ImageBackground } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title } from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover>
                <Title>
                    Meals To Go!
                </Title>
                <AccountContainer>
                    <AuthButton icon="lock-open-outline" mode="contained" onPress={() => {
                        console.log("Login Button Pressed");
                        navigation.navigate("Login");
                    }
                    }>
                        Login
                    </AuthButton>
                    <Spacer size="large">
                        <AuthButton icon="email" mode="contained" onPress={() => {
                            console.log("Register Button Pressed");
                            navigation.navigate("Register");
                        }
                        }>
                            Register
                        </AuthButton>
                    </Spacer>
                </AccountContainer>
            </AccountCover>
        </AccountBackground>
    )
}