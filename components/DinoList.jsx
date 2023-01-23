import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';
import { Dimensions } from 'react-native';
import Header from './Header';

const screenDimensions = Dimensions.get('screen');

export default function DinoList() {
    return (
        <View style={myStyles.container}>
            <TextInput style={myStyles.input} />
            <View style={myStyles.imageContainer}>
                <CustomButton name="Pteranodon" uri="https://www.dododex.com/media/creature/pteranodon.png" />
                <CustomButton name="Triceratops" uri="https://www.dododex.com/media/creature/triceratops.png" />
                <CustomButton name="Raptor" uri="https://www.dododex.com/media/creature/raptor.png" />
            </View>
        </View>
    )
}
const myStyles = StyleSheet.create({
    input: {
        height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.9,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        color: "#ED6DBB2",
        backgroundColor: "#E57A44",
        borderRadius: screenDimensions.height * 0.05,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        zIndex:-1,
        marginTop: screenDimensions.height*0.06,
        flexDirection: "row",
        flexWrap: "wrap"
    }
});