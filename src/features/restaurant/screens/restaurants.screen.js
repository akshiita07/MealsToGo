import { React } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurants-info.component'

export const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
            <View style={styles.searchCntr}>
                <Searchbar
                    mode='view'
                />
            </View>
            <View style={styles.listCntr}>
                <RestaurantInfo />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // give safe area view container ability to completely fill
        flex: 1
    },
    searchCntr: {
        // backgroundColor: "green",
    },
    listCntr: {
        flex: 1,
        backgroundColor: "blue",
    },
    text: {
        padding: 20,
    }
});