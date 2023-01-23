import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const screenDimensions = Dimensions.get('screen');

export default function CustomButton(props) {
    return (
        <View style={myStyles.container}>
            <TouchableOpacity style={myStyles.buttoncontainer} onPress={props.event}>
                <Image
                    source={{ uri: props.uri }}
                    style={myStyles.image}
                    resizeMode="contain"
                />
                <Text style={myStyles.First}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}
const myStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttoncontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        height: screenDimensions.height * 0.4,
        width: screenDimensions.width * 0.41,
    },
    image: {
        height: screenDimensions.height * 0.15,
        width: screenDimensions.width * 0.35,
    },
    First: {
        fontSize: screenDimensions.width * 0.056,
        fontWeight: "bold",
        color: '#21130d',
    },
});