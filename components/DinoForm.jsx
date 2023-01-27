import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';

const screenDimensions = Dimensions.get('screen');

export default function DinoForm(props) {
  return (
    <View style = {myStyles.container}>
      <Text style = {myStyles.h1}>DinoForm</Text>

      <Text style = {myStyles.h2}>Donner la discription</Text>
      <TextInput  
      placeholder="put a discription here" 
      style = {myStyles.input}
      value = {props.discription}
      onChangeText = {props.handlediscriptionChange}
      />
    </View>
  )
}
const myStyles = StyleSheet.create({
    h1: {
        fontSize:40,
        fontWeight:"bold",
        color: '#7EB488',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h2: {
      fontSize:20,
      fontWeight:"bold",
      color: '#7EB488',
      alignItems: 'center',
      justifyContent: 'center'
  },
  input: {    
      height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.9,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        borderColor: '#E57A44',
        color: "#7EB488",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#E57A44"},
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E3D985",
      },
    });