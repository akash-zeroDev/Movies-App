import { View, Text, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import { theme } from '../theme';

const { width, height } = Dimensions.get('window');

export default function Loading() {
    return (
        <View style={{ height, width }} className="absolute flex-row justify-center items-center z-50 bg-neutral-800">
            <ActivityIndicator size="large" color={theme.text} />
        </View>
    )
}
