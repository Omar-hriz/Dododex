import { View, TextInput, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';
import { Dimensions } from 'react-native';
import Header from './Header';
import Fire from 'C:/Users/omarh/OneDrive/Documents/GitHub/Dododex/Fire';
import { useEffect, useState } from 'react';

const screenDimensions = Dimensions.get('screen');

export default function DinoList({handleUriChange, navigation,makeInvisible }) {
    const [dinos, setDinos] = useState([]);
    const [loading, setLoding] = useState(true);
    const base =new Fire();
    base.getDinos(dinos => {
        setDinos(dinos);
        setLoding(false); 
      })
      
    return (
        <View style={myStyles.container}>
            {handleUriChange == null ?
                <Header moveTameDione={() => navigation.navigate("TameDione")} moveHome={() => navigation.navigate("Home")} />
                : null}

            <TextInput style={myStyles.input} />

            <ScrollView >

                <View style={myStyles.imageContainer}>
                    {dinos.map(dino => {
                        <CustomButton event={()=>console.log(dino.name)} name={dino.name} uri={dino.uri}/>
                    })}
                    <CustomButton makeInvisible={makeInvisible} event={handleUriChange} name="Pteranodon" uri="https://www.dododex.com/media/creature/pteranodon.png" />
                    <CustomButton makeInvisible={makeInvisible} event={handleUriChange} name="Triceratops" uri="https://www.dododex.com/media/creature/triceratops.png" />
                </View>


            </ScrollView>

        </View>
    )
}
const myStyles = StyleSheet.create({
    input: {
        height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.9,
        margin: 10,
        borderWidth: 2,
        textAlign: "center",
        borderColor: '#E57A44',
        color: "#7EB488",
        backgroundColor: "#E57A44",
        borderRadius: screenDimensions.height * 0.05,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#E3D985",
    },
    imageContainer: {
        flex: 1,
        zIndex: -1,
        flexDirection: "row",
        flexWrap: "wrap"
    }
});