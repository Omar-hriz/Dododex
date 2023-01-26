import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Dimensions } from 'react-native';


const screenDimensions = Dimensions.get('screen');
export default function Header(props) {
    const [isVisible, setIsVisible] = useState(false)

    return (

        <View style={[myStyles.container]}>

            <TouchableOpacity style={myStyles.buttonContainer} onPress={() => setIsVisible(true)}>

                <Image
                    style={[myStyles.menuButton]}
                    source={{ uri: "https://www.dododex.com/media/logo-small.png" }}
                    resizeMode="contain"
                />

            </TouchableOpacity>

            <Modal visible={isVisible} transparent={true} animationType={"fade"}>

                <View style={myStyles.modalContainer}>

                    <TouchableOpacity onPress={() => setIsVisible(false)}>
                        <Image
                            style={myStyles.modalButton}
                            source={{ uri: "https://www.dododex.com/media/logo-small.png" }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.moveHome}>
                        <Text style={myStyles.textButtonFirst}>Dino List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.moveTameDione}>
                        <Text style={myStyles.textButtonSecond}>Tame Dino</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
            <Text style={[myStyles.title]}>Dododex</Text>
        </View>
    )
}
const myStyles = StyleSheet.create({
    title: {
        marginTop: screenDimensions.height * 0.04,
        fontSize: screenDimensions.width * 0.15,
        fontWeight: "bold",
        color: '#7EB488',
        flex: 3.2
    },
    textButtonFirst: {
        fontWeight: "bold",
        color: '#7EB488',
        fontSize: screenDimensions.width * 0.063,
        padding: 2.5
    },
    textButtonSecond: {
        fontWeight: "bold",
        color: '#7EB488',
        fontSize: screenDimensions.width * 0.051,
        padding: 2.5
    },
    container: {
        backgroundColor: "#974992",
        height: screenDimensions.height * 0.14,
        width: screenDimensions.width,
        flexDirection: "row",
        alignItems: 'center',
    },
    menuButton: {
        marginTop: screenDimensions.height * 0.04,
        height: screenDimensions.height * 0.15,
        width: screenDimensions.width * 0.15,
        marginLeft: screenDimensions.width * 0.06,
    },
    modalButton: {
        height: screenDimensions.height * 0.10,
        width: screenDimensions.width * 0.15,
        margin: screenDimensions.width * 0.015,
    },
    buttonContainer: {
        flex: 1
    },
    modalContainer: {
        backgroundColor: "#974992",
        height: "100%",
        width: "30%",
        alignItems: 'center',
    }
});