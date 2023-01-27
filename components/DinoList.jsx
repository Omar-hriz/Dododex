import { View, TextInput, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';
import Header from './Header';
import Fire from '../Fire';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const screenDimensions = Dimensions.get('screen');

export default function DinoList(props) {
    const navigation = useNavigation();
    const [dinos, setDinos] = useState([]);
    const [filteredDinos, setFilteredDinos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const base = new Fire();
        base.getDinos(dinos => {
            setDinos(dinos);
            setFilteredDinos(dinos);
            setLoading(false);
        })
    }, [])

    const handleFilter = (searchedDino) => {
        const newListDinos = dinos.filter((dino) => dino.name.toLowerCase().includes(searchedDino.toLowerCase()));
        setFilteredDinos(newListDinos);
    }

    return (
        <View style={myStyles.container}>
            {props.handleUriChange == null && (
                <Header moveTameDione={() => navigation.navigate("TameDione")} moveHome={() => navigation.navigate("Home")} />
            )}
            <TextInput key="searchbar" placeholder='Rechercher' onChangeText={handleFilter} style={myStyles.input} />
            <ScrollView >
                <View style={myStyles.imageContainer}>
                    {filteredDinos.map(dino => (
                        <CustomButton key={dino.id} makeInvisible={props.makeInvisible} event={props.handleUriChange} name={dino.name} uri={dino.uri} />
                    ))}
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
