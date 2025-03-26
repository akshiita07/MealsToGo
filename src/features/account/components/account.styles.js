import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { TextInput } from 'react-native-paper';

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg"),
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const AccountCover = styled.View`
display: flex;
justify-content: center;
align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
`;

// add content:
export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.space[4]};
`;

// add buttons:
export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
padding: ${(props) => props.theme.space[1]};
`;

// add text input from react native paper:
export const AuthInput = styled(TextInput)`
    width: 300px;
`;

// add title component:
export const Title = styled(Text).attrs({
    variant: "title",
})`
    font-size: 30px;
`;

// add error text component:
export const ErrorContainer = styled.View`
    max-width: 300px;
    align-items: center;
    align-self: center;
    margin-top: ${(props) => props.theme.space[2]};
    margin-bottom: ${(props) => props.theme.space[2]};
`;

// for animation box:
export const AnimationWrapper = styled.View`
    position: absolute;
    top:22%;
    padding:${(props) => props.theme.space[2]};
`;