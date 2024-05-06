import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons'
import { estilo } from './../src/estilo/style'

const ImgBack = './src/pages/Home/img/fundo.png'


import home from './pages/Home';
import login from './pages/Login'

const Tab = createBottomTabNavigator();

export default function Routes(){

    return (
    <Tab.Navigator>
        <Tab.Screen name="Login" component={login} options={{tabBarIcon: ({size, color}) => (<Entypo name='user' size={size} color={color} />)}}/>
        <Tab.Screen name="Início" component={home} options={{tabBarIcon: ({size, color}) =>( <Entypo name='user' size={size} color={color}/>) }}/>
    </Tab.Navigator>
    );
}