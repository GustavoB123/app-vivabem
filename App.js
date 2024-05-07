import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import home from './src/pages/Home'
import login from './src/pages/Login'
import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes /> 
    </NavigationContainer>
  );
}

 

