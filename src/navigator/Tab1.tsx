import React, { PureComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { NasaScreen } from "../screens/NasaScreen";
import { MyItems } from "../interfaces/nasaInterfaces";


export type RootStackParams = {
    HomeScreen: undefined;
    NasaScreen: {nasaItem: MyItems, color: string};
}   


const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white",
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NasaScreen" component={NasaScreen} />
        </Stack.Navigator>
    );
}