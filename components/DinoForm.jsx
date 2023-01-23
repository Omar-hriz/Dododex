import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web';

export default function DinoForm(props) {
  return (
    <View style = {myStyles.container}>
      <Text style = {myStyles.h1}>DinoForm</Text>
      <Text style = {myStyles.h2}>Donner le nom du dino</Text>

      <TextInput  
      placeholder="put name here" 
      style = {myStyles.input}
      value = {props.name}
      onChangeText = {props.handleNameChange}
      />

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
        color: '#21130d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h2: {
      fontSize:20,
      fontWeight:"bold",
      color: '#21130d',
      alignItems: 'center',
      justifyContent: 'center'
  },
  input: {    
    height: "10vw",
    width:"90vw",
    margin: 10,
    borderWidth: 3,
    padding: 10,
},
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
});