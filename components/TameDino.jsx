import { View, StyleSheet, Modal, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Header from './Header';
import { Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import FoodTable from './FoodTable';
import AddButton from './AddButton';
import DinoList from './DinoList';

const screenDimensions = Dimensions.get('screen');

export default function TameDino({navigation}) {
    const [isListVisible, setisListVisible] = useState(false)
    const [uri, setUri] = useState("https://www.dododex.com/media/creature/raptor.png")
    return (
       
            <View style={myStyles.container}>

            <Header moveTameDione={() =>navigation.navigate("TameDione")} moveHome={() =>navigation.navigate("Home")}/>

                <TouchableOpacity style={myStyles.buttoncontainer} onPress={() => setisListVisible(true)}>
                    <Image
                        source={{ uri: uri }}
                        style={myStyles.image}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Modal visible={isListVisible}>
                    <DinoList handleUriChange={newUri => setUri(newUri)}/>
                </Modal>

                <View>
                    <TextInput style={myStyles.input} />
                   <AddButton content="Calculate"/>
                </View>

                <View style={myStyles.textContainer}>
                    <Text style={myStyles.title}>Taming</Text>
                </View>

                <FoodTable content="123"/>

            </View>
       

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
        borderColor: '#E57A44',
        color: "#7EB488",
        fontWeight: "bold",
        textAlign:"center",
        backgroundColor: "#E57A44",
        borderRadius: screenDimensions.height * 0.05,
    },
});
