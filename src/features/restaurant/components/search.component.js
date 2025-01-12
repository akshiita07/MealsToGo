﻿import React, { useContext, useState } from "react"
import { Searchbar } from 'react-native-paper';
// for styling using styled-components:
import styled from 'styled-components/native';

const SearchContainer = styled.View`
    padding:${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.ui.quaternary};
`
import { LocationContext } from '../../../services/location/location.context'

export const Search = () => {
    // locationContext has search feature in it:
    const { keyword, search } = useContext(LocationContext)
    // console.log(locationContext)

    const [searchKeyword, setSearchKeyword] = useState(keyword)

    return (
        <SearchContainer>
            <Searchbar
                mode="view"
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                // every time d text changes set the keyword to this text
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )
}