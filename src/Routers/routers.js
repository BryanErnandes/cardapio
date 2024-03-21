import react from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Principal from "../Pages/Principal"

export default function Cardapio() {

    const Stack = createNativeStackNavigator()
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}