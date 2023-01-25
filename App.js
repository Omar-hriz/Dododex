
import DinoList from './components/DinoList';
import TameDino from './components/TameDino';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fire from './Fire';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();
export default function App() {
  const [dinos, setDinos] = useState([])
  const [loading, setLoding] = useState(true)
  let dino ={
    "id":1,
    "name":"Pteranodon",
    "url":"https://www.dododex.com/media/creature/pteranodon.png"
  }
  
  useEffect(() => {
    const base = new Fire();
    base.getDinos(dinos => {
      setDinos(dinos);
      setLoding(false); 
    })
  }, [])
  const base = new Fire();
base.addDino()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={DinoList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TameDione"
          component={TameDino}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

