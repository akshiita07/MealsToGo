import { React } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 0,
  },
})`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;