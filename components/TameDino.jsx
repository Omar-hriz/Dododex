import { View, StyleSheet, Modal, TextInput } from 'react-native'
import React from 'react'
import Header from './Header';
import { Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { Button } from 'react-native';
import FoodTable from './FoodTable';

const screenDimensions = Dimensions.get('screen');

export default function TameDino(props) {
    return (
        <Modal visible={props.tameDinoVisisble}>
            <View style={myStyles.container}>
                <Header />

                <TouchableOpacity style={myStyles.buttoncontainer}>
                    <Image
                        source={{ uri: "https://www.dododex.com/media/creature/raptor.png" }}
                        style={myStyles.image}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <View>
                    <TextInput style={myStyles.input} />
                    <Button title='Calculate' style={myStyles.calculate} />
                </View>
                <View style={myStyles.textContainer}>
                    <Text style={myStyles.title}>Taming </Text>
                </View>
                <View>
                    
                </View>
                <FoodTable />

            </View>
        </Modal>

    )
}
const myStyles = StyleSheet.create({
    title: {
        marginTop: screenDimensions.height * 0.005,
        fontSize: screenDimensions.width * 0.14,
        fontWeight: "bold",
        color: '#7EB488',
    },
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#E3D985",
    },
    image: {
        height: screenDimensions.height * 0.15,
        width: screenDimensions.width * 0.9,

    },
    textContainer: {
        width: screenDimensions.width,
    },
    calculate: {
        margin: 10,
        borderWidth: 2,
        padding: 10,
        color: "#E57A44",
        borderRadius: screenDimensions.height * 0.05,
        height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.35,
    },
    buttoncontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        height: screenDimensions.height * 0.15,
        width: screenDimensions.width * 0.5,
    },
    input: {
        height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.35,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        color: "#ED6DBB2",
        backgroundColor: "#E57A44",
        borderRadius: screenDimensions.height * 0.05,
    },
});
