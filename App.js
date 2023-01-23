import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DinoList from './components/DinoList';
import Header from './components/Header';
import TameDino from './components/TameDino';

export default function App() {
  const [tameDinoIsVisble, settameDinoIsVisble] = useState(false)
  const [dinoListIsVisible, setdinoListIsVisible] = useState(true)
  return (
    <View style={styles.container}>
      <Header dinoListHandler={()=>setdinoListIsVisible(true)} tameDinoHandler={()=>settameDinoIsVisble(true)}/>
      <DinoList dinoListVisible={dinoListIsVisible}/>
      <TameDino tameDinoVisisble={tameDinoIsVisble}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#E3D985",
  },
});
