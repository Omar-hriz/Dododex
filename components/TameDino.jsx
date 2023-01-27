import { View, StyleSheet, Modal, TextInput, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react';
import React from 'react'
import Header from './Header';
import Fire from '../Fire';
import { Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import FoodTable from './FoodTable';
import AddButton from './AddButton';
import DinoList from './DinoList';

const screenDimensions = Dimensions.get('screen');

export default function TameDino({ navigation }) {
    const [isListVisible, setisListVisible] = useState(false);
    const [dinos, setDinos] = useState([]);
    const [uri, setUri] = useState("https://www.dododex.com/media/creature/raptor.png");
    const [myDino, setMyDino] = useState(null);
    const [foods, setFoods] = useState([]);
    const [kibble, setKibbles] = useState([]);
    const [lvl, setLvl] = useState(100)
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const base = new Fire();
        base.getDinos(dinos => {
            setDinos(dinos);
            const currentDino = dinos.find(dino => dino.uri == uri)
            setMyDino(currentDino);
            if (currentDino.diet == "Meats") {
            
                base.getMeats(foods => {
                    setFoods(foods);
                    setResult(calcData(currentDino, foods, lvl));
                })
            } else {
                base.getVegies(foods => {
                    setFoods(foods);
                    setResult(calcData(currentDino, foods, lvl));
                    console.log(lvl);
                });
            }
            setLoading(false);
            /*base.getKibbles(kibbles => {
                setKibbles(kibbles);
                setLoading(false);
                let myKibble = kibbles.find(kibble => kibble.name == myDino.tier + " Kibble")
                foods.push(myKibble)
            });*/
        });
    }, [uri,lvl]);

    console.log(lvl);
    

    return (

        <View style={{ flex: 1 }} >

            {loading && <ActivityIndicator />}
            {!loading && <View style={myStyles.container}>
                <Header moveTameDione={() => navigation.navigate("TameDione")} moveHome={() => navigation.navigate("Home")} />

                <TouchableOpacity style={myStyles.buttoncontainer} onPress={() => setisListVisible(true)}>
                    <Image
                        source={{ uri: uri }}
                        style={myStyles.image}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Modal visible={isListVisible}>
                    <DinoList makeInvisible={() => setisListVisible(false)} handleUriChange={newUri => setUri(newUri)} />
                </Modal>

                <View>
                    <TextInput style={myStyles.input} onChangeText={newlvl => setLvl(newlvl)}/>
                </View>

                <View style={myStyles.textContainer}>
                    <Text style={myStyles.title}>Taming</Text>
                </View>

                <FoodTable content={result} />
            </View>}


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
        flex: 1
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
        textAlign: "center",
        backgroundColor: "#E57A44",
        borderRadius: screenDimensions.height * 0.05,
    },
});


function calcData(cr, foods, level) {
    var affinityNeeded = cr.a0 + (cr.a1 * level);
    var foodConsumption = cr.foodBase * cr.foodMult;
    var returnDatas = [];
    foods.forEach(food => {
        var tamingMult = 4;
        var foodMaxRaw = affinityNeeded / food.affinity / tamingMult;
        var foodMax = Math.ceil(foodMaxRaw/3);
        var foodSecondsPer = food.value / foodConsumption;
        var foodSeconds = Math.ceil(foodMax * foodSecondsPer);
        var returnData = { uri: food.uri, name: food.name, max: foodMax, seconds: foodSeconds };
        returnDatas.push(returnData);
    })
    return returnDatas;
}
