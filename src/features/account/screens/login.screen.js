import React, { useState, useContext } from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // to login user:
    const { onLogin, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover>
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
                            secure
                            onChangeText={p => setPassword(p)}
                        >
                        </AuthInput>
                    </Spacer>

                    {error && (<Spacer size="large">
                        <Text variant="error">
                            {
                                // error is in d form of array
                                error
                            }
                        </Text>
                    </Spacer>)}

                    <Spacer size="large">
                        <AuthButton
                            icon="login-variant"
                            mode="contained"
                            onPress={() => {
                                console.log("Log in request generated");
                                onLogin(email, password);
                            }}
                        >
                            Login
                        </AuthButton>
                    </Spacer>
                </AccountContainer>
            </AccountCover>
        </AccountBackground >
    )
}