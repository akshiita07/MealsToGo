import { React } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform, Image } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';

// for styling using styled-components:
import styled from 'styled-components/native';

// svg handling library: expo install react-native-svg
import { SvgXml } from 'react-native-svg';
// import start rating svg:
import star from '../../../../assets/star'
// import open isOpen/closed svg:
import isOpen from '../../../../assets/open'

// write as css:
const Title = styled.Text`
    padding-left:${(props) => props.theme.space[3]};
    padding-top:${(props) => props.theme.space[2]};
    padding-bottom:${(props) => props.theme.space[0]};
    font-weight:${(props) => props.theme.fontWeights.bold};
    font-size:${(props) => props.theme.fontSizes.title};
    color:${(props) => props.theme.colors.ui.primary};
    font-family:${(props) => props.theme.fonts.body};
    
`;
const RestaurantCard = styled(Card)`
    margin:${(props) => props.theme.space[3]};
`;
const RestaurantCardCover = styled(Card.Cover)`
    backgroundColor:${(props) => props.theme.colors.ui.quaternary};
`;
const Address = styled(Text)`
    padding-left:${(props) => props.theme.space[3]};
    padding-bottom:${(props) => props.theme.space[2]};
    font-weight:${(props) => props.theme.fontWeights.bold};
    font-size:${(props) => props.theme.fontSizes.body};
    color:${(props) => props.theme.colors.ui.primary};
    font-family:${(props) => props.theme.fonts.body};
`;

const Rating = styled(View)`
    flex-direction:row;
    padding-left:${(props) => props.theme.space[3]};
    padding-top:${(props) => props.theme.space[1]};
    padding-bottom:${(props) => props.theme.space[1]};
`;

const OpenIcon = styled(View)`
    flex-direction:row;
    padding-right:${(props) => props.theme.space[3]};
    align-items:center;
    gap:10px
`;

const IsClosedTemp = styled(Text)`
    flex-direction:row;
    color:${(props) => props.theme.colors.ui.error};
    font-weight:${(props) => props.theme.fontWeights.medium};
    font-size:${(props) => props.theme.fontSizes.body};
    font-family:${(props) => props.theme.fonts.heading};
`;

const Row1 = styled(View)`
    flex-direction:row;
    justify-content:space-between;  
    align-items:center;
    padding-right:${(props) => props.theme.space[3]};
`;

const Row2 = styled(View)`
    flex-direction:row;
    justify-content:space-between;  
    align-items:center;
`;

const IconImage = styled(Image)`
    width:30;
    height:30;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
    // restaurant is the object whoose porperties we want to take:
    const { name = "Some Restaurant", icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", photos = ["https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"], address = "#46 Savitry", isOpenNow = true, rating = 4, isClosed = false } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));      //returns undefined inside array for rating's floor no of times
    // console.log(ratingArray)     //[undefined, undefined, undefined, undefined]

    return (
        // <Text>Restaurant Name: {name}</Text>
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Row1>
                <Title>{name} </Title>
                {
                    isOpenNow && <SvgXml xml={isOpen} width={30} height={30} />
                    /* whenever isOpenNow = false then do not show this */
                }
            </Row1>
            <Row2>
                <Rating>
                    {
                        ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))
                    }
                </Rating>

                <OpenIcon>
                    {isClosed && <IsClosedTemp>Closed temporarily</IsClosedTemp>}
                    <IconImage source={{ uri: icon }} ></IconImage>
                </OpenIcon>

            </Row2>
            <Address>{address} </Address>
        </RestaurantCard>
    )
}
