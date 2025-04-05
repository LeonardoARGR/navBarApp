import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './Home';
import Favoritos from './Favoritos';
import Usuario from './Usuarios';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#b94646',
            }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'black'
                }
            }}
        >

            <Tab.Screen
                name="Favoritos"
                component={Favoritos}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="cards-heart" color={color} size={size}/>
                    ),
                }}
            />

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                }}
            />
            
            <Tab.Screen
                name="Usuarios"
                component={Usuario}
                options={{
                    tabBarLabel: 'Usuario',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}