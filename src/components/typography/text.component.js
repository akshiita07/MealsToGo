import styled, { useTheme } from "styled-components/native";

const defaultTextStyle = (theme) => `
    font-family:${theme.fonts.body};
    font-weight:${theme.fontWeights.regular};
    color:${theme.colors.text.primary};
    flex-wrap:wrap;
    margin-top:0px;
    margin-bottom:0px;
`

const body = (theme) => `
    font-size:${theme.fontSizes.body};
    `

const label = (theme) => `
    font-family:${theme.fonts.heading};
    font-size:${theme.fontSizes.body};
    font-weight:${theme.fontWeights.medium};
`

const caption = (theme) => `
    font-size:${theme.fontSizes.caption};
    font-weight:${theme.fontWeights.bold};
    font-family:${theme.fonts.body};
`

const error = (theme) => `
    color:${theme.colors.text.error};
`

const hint = (theme) => `
    font-size:${theme.fontSizes.body};
`

const title = (theme) => `
    font-family:${theme.fonts.heading};
    font-size:${theme.fontSizes.title};
    font-weight:${theme.fontWeights.bolder};
`

const variantsObj = {
    body,
    title,
    label,
    caption,
    error,
    hint
}

export const Text = styled.Text`
    ${({ theme }) => defaultTextStyle(theme)}
    ${({ variant, theme }) => variantsObj[variant](theme)}
`

Text.defaultProps = {
    variant: 'body',
}