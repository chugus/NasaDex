import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NasaScreen } from "../screens/NasaScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RootStackParams } from "./Tab1";

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white",
                }
            }}
        >
            <Tab2.Screen name="HomeScreen" component={SearchScreen} />
            <Tab2.Screen name="NasaScreen" component={NasaScreen} />
        </Tab2.Navigator>
    );
}