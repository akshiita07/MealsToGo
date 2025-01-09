import { React } from 'react'

// svg handling library: expo install react-native-svg
import { SvgXml } from 'react-native-svg';
// import start rating svg:
import star from '../../../../assets/star'
// import open isOpen/closed svg:
import isOpen from '../../../../assets/open'
// Text:
import { Text } from '../../../components/typography/text.component'

// import all css styles:
import {
    RestaurantCard,
    RestaurantCardCover,
    Rating,
    OpenIcon,
    Row1,
    Row2,
    Row3,
    IconImage
} from './restaurants-info.styles'

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
                <Text variant="title">{name} </Text>
                {
                    isOpenNow && <SvgXml xml={isOpen} width={30} height={30} />
                    /* whenever isOpenNow = false then do not show this */
                }
            </Row1>
            <Row2>
                <Rating>
                    {
                        ratingArray.map((_, index) => (
                            <SvgXml key={`star-${index}`} xml={star} width={25} height={22} />
                        ))
                    }
                </Rating>

                <OpenIcon>
                    {isClosed && <Text variant="error">Closed temporarily</Text>}
                    <IconImage source={{ uri: icon }} ></IconImage>
                </OpenIcon>

            </Row2>

            <Row3>
                <Text variant="caption">{address} </Text>
            </Row3>
        </RestaurantCard>
    )
}
