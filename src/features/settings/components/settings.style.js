import styled from "styled-components/native";
import { View } from "react-native";
import { List, Avatar } from "react-native-paper";

export const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled(View)`
    align-items: center;
    top:10px;
`;
