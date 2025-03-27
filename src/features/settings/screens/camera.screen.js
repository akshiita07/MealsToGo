import React, { useState, useRef } from "react";
import { Button, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text } from "../../../components/typography/text.component";
// npx expo install expo-camera
import { useCameraPermissions } from 'expo-camera';

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

    const snapPicture = async () => {
        // take picture
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
            // returns height,uri,width where uri is the location where image is stored locally
        }
    };

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <SafeAreaView>
            <Text variant="label" style={{ textAlign: 'center' }}>
                Camera
            </Text>
            <TouchableOpacity onPress={snapPicture}>
                <ProfileCamera facing={facing} ref={(camera) => (cameraRef.current = camera)}>
                    <View >
                        <TouchableOpacity onPress={toggleCameraFacing}>
                            <Text variant="label">Flip Camera</Text>
                        </TouchableOpacity>
                        {/* for taking picture */}

                    </View>
                </ProfileCamera>
            </TouchableOpacity>
        </SafeAreaView >

    );
}