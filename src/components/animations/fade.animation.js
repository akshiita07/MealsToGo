import { React, useEffect, useRef } from "react"
import { Animated } from 'react-native';

export const FadeInView = ({ dur = 1500, ...props }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: dur,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim, dur]);

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}>
            {props.children}
        </Animated.View>
    );
};