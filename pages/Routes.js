import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './Home';
import Alerta from './Alerta';
import Usuario from './Usuarios';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#b94646',
            }}
        >
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
                name="Alerta"
                component={Alerta}
                options={{
                    tabBarLabel: 'Alerta',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
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