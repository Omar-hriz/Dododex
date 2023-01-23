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

                <DinoForm
                    handleNameChange={newName => setName(newName)}
                    handlediscriptionChange={newDiscription => setDiscription(newDiscription)}
                    name={name}
                    discription={discription}
                />

                <AddButton content="Add Dino" onPress={() => console.log(name + " that " + discription)} />
                <AddButton content="Close" onPress={props.onClose} />
                <ScrollView>
                    <CustomButton name="ptera" uri="https://www.dododex.com/media/creature/pteranodon.png" />
                    <CustomButton name="" uri="https://www.dododex.com/media/creature/triceratops.png" />
                </ScrollView>

            </View>
        </Modal>
    )
}
const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
