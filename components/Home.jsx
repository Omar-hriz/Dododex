import DinoList from './DinoList';
import TameDino from './TameDino';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fire from '../Fire';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import DinoModal from './DinoModal';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

export default function Home() {
    const [isVisible, setisVisible] = useState(false);
    const [uri, setUri] = useState("https://www.dododex.com/media/creature/raptor.png");
    const [dinos, setDinos] = useState([]);
    const [myDino, setMyDino] = useState(null);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const base = new Fire();
        base.getDinos(dinos => {
            setDinos(dinos);
            const currentDino = dinos.find(dino => dino.uri == uri)
            setMyDino(currentDino);
            setLoading(false);
        });
    }, [uri]);
    return (
        <View style={{ flex: 1 }}>
            {loading && <ActivityIndicator />}
            {!loading && <View style={{ flex: 1 }}>
                <Header moveTameDione={() => navigation.navigate("TameDione")} moveHome={() => navigation.navigate("Home")} />
                <DinoList makeInvisible={() => setisVisible(true)} handleUriChange={newUri => setUri(newUri)} />
                <DinoModal dino={myDino} isModalVisible={isVisible} onClose={() => setisVisible(false)} />
            </View>}
        </View>
    )
}