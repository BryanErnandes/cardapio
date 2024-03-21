import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from "react-native";

import CardapioRouters from './src/Routers/routers';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <CardapioRouters />
      <StatusBar backgroundColor='#000000' barStyle='light-content' translucent={false} />
    </NavigationContainer>

  );
}

