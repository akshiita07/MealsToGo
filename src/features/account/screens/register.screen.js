import React, { useState, useContext } from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, Title, ErrorContainer } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";


export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    // to register user:
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover>
                <Title>
                    Meals To Go!
                </Title>
                <AccountContainer>
                    <AuthInput
                        label="Email"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={e => setEmail(e)}
                    >

                    </AuthInput>

                    <Spacer size="large">
                        <AuthInput
                            label="Password"
                            value={password}
                            textContentType="password"
                            secureTextEntry //to get password as circles
                            autoCapitalize="none"
                            onChangeText={p => setPassword(p)}
                        >
                        </AuthInput>
                    </Spacer>

                    <Spacer size="large">
                        <AuthInput
                            label="Confirm Password"
                            value={repeatedPassword}
                            textContentType="password"
                            secureTextEntry //to get password as circles
                            autoCapitalize="none"
                            onChangeText={p => setRepeatedPassword(p)}
                        >
                        </AuthInput>
                    </Spacer>

                    <ErrorContainer>
                        {error && (<Spacer size="large">
                            <Text variant="error">
                                {
                                    // error is in d form of array
                                    error
                                }
                            </Text>
                        </Spacer>)}
                    </ErrorContainer>

                    <Spacer size="large">
                        {!isLoading ? <AuthButton
                            icon="email"
                            mode="contained"
                            onPress={() => {
                                console.log("Log in request generated");
                                onRegister(email, password, repeatedPassword);
                            }}
                        >
                            Register
                        </AuthButton> : <ActivityIndicator animating={true} color="Colors.blue300"></ActivityIndicator>}
                    </Spacer>

                </AccountContainer>

                <Spacer size="large">
                    <AuthButton
                        icon="arrow-collapse-left"
                        mode="contained"
                        onPress={() => {
                            console.log("Back button pressed");
                            //go back:
                            navigation.goBack();
                        }}
                    >
                        Back
                    </AuthButton>
                </Spacer>
            </AccountCover>
        </AccountBackground >
    )
}