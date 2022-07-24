import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';

import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2Screen';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: '#fff',
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5858D6',
                tabBarStyle: {
                    position: 'relative',
                    backgroundColor: 'rgba(255,255,255,0.82)',
                    paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10, 
                    borderWidth: 0,
                    elevation: 0,
                    height: 70,//( Platform.OS === 'ios') ? 70 : 80
                }
            }}
        >
            <Tab.Screen
                name="Navigator"
                component={Tab1}
                options={{
                    tabBarLabel: 'Tarjetas',
                    tabBarIcon: ({ color }) => {
                        return <Icon
                            color={color}
                            size={25}
                            name='menu' />;
                    },
                    tabBarLabelStyle: {
                        fontSize: 16
                    }
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color }) => {
                        return <Icon
                            color={color}
                            size={25}
                            name='search-outline' />;
                    },
                    tabBarLabelStyle: {
                        fontSize: 16
                    }
                }}
            />
        </Tab.Navigator>
    );
}