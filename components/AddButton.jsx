import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function AddButton(props) {
    return (
        <View style={buttonStyle.default} >
            <Button title={props.content} onPress={props.onPress} />
        </View>
    )
}
const buttonStyle = StyleSheet.create({
    default: {
        height: "10vw",
        width:"50vw",
        alignItems: 'center',
        justifyContent: 'center',
        color: "dodgerblue",
        margin: 10,
    padding: 10,
    },
});
