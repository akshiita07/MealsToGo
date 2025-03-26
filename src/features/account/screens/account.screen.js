import React from "react";
import { ImageBackground } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from '../components/account.styles';

// for adding watermelon animation from lottie react native expo:
// npx expo install lottie-react-native
import LottieView from 'lottie-react-native';

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover>
                <AnimationWrapper>
                    {/* Add animation here: */}
                    <LottieView
                        key="animation"
                        autoPlay
                        loop
                        resizeMode="cover"
                        style={{
                            width: 300,
                            height: 100,
                        }}
                        source={require("../../../../assets/watermelon.json")}
                    />
                </AnimationWrapper>
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