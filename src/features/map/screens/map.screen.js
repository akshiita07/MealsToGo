// npx expo install react-native-maps
// yarn add react-native-maps
import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
