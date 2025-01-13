import React, { useState } from "react"
import { ScrollView } from "react-native"
import { RestaurantInfo } from '../components/restaurants-info.component'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { List } from 'react-native-paper';

export const RestaurantDetailScreen = ({ route }) => {
    const restaurant = route.params.restaurant;

    // for menu:
    const [breakfast, setBreakfast] = React.useState(false);
    const [lunch, setLunch] = React.useState(false);
    const [dinner, setDinner] = React.useState(false);
    const [drinks, setDrinks] = React.useState(false);

    return (
        // render the same rest card first
        // then render a static menu using list accordion
        <SafeArea>
            <RestaurantInfo restaurant={restaurant}>

            </RestaurantInfo>

            <ScrollView>
                <List.Section title="Menu">
                    <List.Accordion
                        title="Breakfast"
                        left={(props) => <List.Icon {...props} icon="bread-slice-outline" />}
                        expanded={breakfast}
                        onPress={() => setBreakfast(!breakfast)}>
                        <List.Item title="Avocado Toast" />
                        <List.Item title="Banana Pancakes" />
                        <List.Item title="Smoothie Bowl" />
                        <List.Item title="Vegetable Sandwich" />
                        <List.Item title="Granola with Yogurt" />
                    </List.Accordion>
                    <List.Accordion
                        title="Lunch"
                        left={(props) => <List.Icon {...props} icon="pizza" />}
                        expanded={lunch}
                        onPress={() => setLunch(!lunch)}>
                        <List.Item title="Veggie Wrap" />
                        <List.Item title="Margherita Pizza" />
                        <List.Item title="Pasta Alfredo" />
                        <List.Item title="Spring rolls" />
                        <List.Item title="Vegetable Stir-fry" />
                    </List.Accordion>
                    <List.Accordion
                        title="Dinner"
                        left={(props) => <List.Icon {...props} icon="food-variant" />}
                        expanded={dinner}
                        onPress={() => setDinner(!dinner)}>
                        <List.Item title="Veggie Burger" />
                        <List.Item title="Stuffed Bell Peppers" />
                        <List.Item title="Paneer Tikka Masala" />
                        <List.Item title="Quinoa Salad" />
                        <List.Item title="Vegetable Fried Rice" />
                    </List.Accordion>
                    <List.Accordion
                        title="Drinks"
                        left={(props) => <List.Icon {...props} icon="glass-wine" />}
                        expanded={drinks}
                        onPress={() => setDrinks(!drinks)}>
                        <List.Item title="Cold Coffee" />
                        <List.Item title="Midnight Blue" />
                        <List.Item title="Fresh Lime Soda" />
                        <List.Item title="Watermelon Juice" />
                        <List.Item title="Virgin Mojito" />
                    </List.Accordion>
                </List.Section>

            </ScrollView>
        </SafeArea>
    )
}