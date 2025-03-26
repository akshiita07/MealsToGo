import { StatusBar, SafeAreaView } from 'react-native';
// for styling using styled-components:
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `
    margin-top:${StatusBar.currentHeight}px;
    background-color: background-color: ${(props) => props.theme.colors.bg.primary};
    `};
`