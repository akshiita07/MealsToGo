import React, { useState, useRef, useEffect } from "react";
import { Button, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text } from "../../../components/typography/text.component";
// npx expo install expo-camera
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import { ProfileCamera } from "../components/camera.styles"


export const CameraScreen = ({ navigation }) => {

    const cameraRef = useRef();

    // get permissions:
    const [facing, setFacing] = useState('back');

    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View>
                <Text variant="label">Provide permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <SafeAreaView>
            <Text variant="label" style={{ textAlign: 'center' }}>
                Camera
            </Text>
            <ProfileCamera facing={facing} >
                <View >
                    <TouchableOpacity onPress={toggleCameraFacing}>
                        <Text variant="label">Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </ProfileCamera>
        </SafeAreaView >

    );
}