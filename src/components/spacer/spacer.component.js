import React from "react";
import { View, Text } from "react-native";
// useTheme hook
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
}

const positionVariant = {
    top: 'marginTop',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom',
}

const getVariant = (position, size, theme) => {
    const property = positionVariant[position];
    const sizeIndex = sizeVariant[size];
    const value = theme.space[sizeIndex];
    return `${property}: ${value}`;
}

const SpacerView = styled.View`
${({ variant }) => variant}`

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return (
        <SpacerView variant={variant}>
            {children}
        </SpacerView>
    )
}

Spacer.defaultProps = {
    position: 'top',
    size: 'small'
}