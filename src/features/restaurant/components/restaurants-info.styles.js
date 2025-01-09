import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { View, Image } from "react-native";


export const RestaurantCard = styled(Card)`
    margin:${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
    backgroundColor:${(props) => props.theme.colors.ui.quaternary};
`;

export const Rating = styled(View)`
    flex-direction:row;
    padding-left:${(props) => props.theme.space[3]};
    padding-top:${(props) => props.theme.space[1]};
    padding-bottom:${(props) => props.theme.space[1]};
`;

export const OpenIcon = styled(View)`
    flex-direction:row;
    padding-right:${(props) => props.theme.space[3]};
    align-items:center;
    gap:10px
`;

export const Row1 = styled(View)`
    flex-direction:row;
    justify-content:space-between;  
    align-items:center;
    padding-left:${(props) => props.theme.space[3]};
    padding-top:${(props) => props.theme.space[2]};
    padding-bottom:${(props) => props.theme.space[0]};
    padding-right:${(props) => props.theme.space[3]};
`;

export const Row2 = styled(View)`
    flex-direction:row;
    justify-content:space-between;  
    align-items:center;
    padding-left:${(props) => props.theme.space[0]};
    margin-left:${(props) => props.theme.space[0]};
`;

export const Row3 = styled(View)`
    flex-direction:row;
    justify-content:space-between;  
    align-items:center;
    padding-left:${(props) => props.theme.space[3]};
    padding-bottom:${(props) => props.theme.space[2]};
`;

export const IconImage = styled(Image)`
    width:30;
    height:30;
`;