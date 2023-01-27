import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AddButton from './AddButton'
import DinoForm from './DinoForm';
import { useState } from 'react';
import CustomButton from './CustomButton';

export default function DinoModal(props) {
    const [name, setName] = useState("")
    const [discription, setDiscription] = useState("")
    return (
        <Modal visible={props.isModalVisible}>
            <View style={myStyles.container}>

                {props.dino.des == "" && (
                    <DinoForm
                        handleNameChange={newName => setName(newName)}
                        handlediscriptionChange={newDiscription => setDiscription(newDiscription)}
                        name={name}
                        discription={discription}
                    />
                )}

                {props.dino.des != "" && (
                    <Text style={myStyles.h2}>{props.dino.des}</Text>

                )}
                {props.dino.des == "" && (
                    <AddButton content="Add Des" onPress={() => console.log(name + " that " + discription)} />
                )}

                <AddButton content="Close" onPress={props.onClose} />

                <CustomButton name={props.dino.name} uri={props.dino.uri} />

            </View>
        </Modal>
    )
}
const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E3D985",
    },
    h2: {
        fontSize:20,
        fontWeight:"bold",
        color: '#7EB488',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
