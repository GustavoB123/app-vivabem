import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { estilo } from './../src/estilo/style'

const ImgBack = './src/pages/Home/img/fundo.png'


import home from './pages/Home';
import login from './pages/Login'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="dumbbell" size={24} color="black"/>),  }}/>
            <Tab.Screen name="Exercícios" component={home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="dumbbell" size={24} color="black" />), }}/>
            <Tab.Screen name="Aulas" component={home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="dumbbell" size={24} color="black" />), }}/>
            <Tab.Screen name="Perfil" component={home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="dumbbell" size={24} color="black" />), }}/>
        </Tab.Navigator>
    );
}


export default function Routes(){

    return (
        <Stack.Navigator >
            <Stack.Screen name='Login' component={login} options={{headerShown : false}}/>
            <Stack.Screen name="Home" component={MyTabs} options={({ navigation }) => ({ title: 'Home', headerLeft: () => (<HeaderBackButton onPress={() => navigation.navigate('Login')} />
            ),
          })}
        />
        </Stack.Navigator>
    );
}