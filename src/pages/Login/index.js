import React from 'react';
import { Button, View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { estilo } from '../../estilo/style'

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[estilo.button, buttonStyle]}>
      <Text style={[estilo.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

  const ImgBack = '../../img/fundo.png'
navigation
export default function login({navigation}) {
     return (
        <View style={{flex: 1, alignItems: 'center',  backgroundColor: '# ',}}>
        <ImageBackground source={require(ImgBack)} style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={estilo.img} source={require('../../img/logoVivaBem.svg')} />
        <TextInput style={estilo.input} placeholder='Email' />
        <TextInput secureTextEntry={true} style={estilo.input} placeholder='Senha' />
        <CustomButton title="Entrar" onPress={() => navigation.navigate('Inicio')} buttonStyle={estilo.btn} textStyle={estilo.btnTexto} />
        <CustomButton title="Esqueci a senha" onPress={() => navigation.navigate('')} buttonStyle={estilo.btn2} textStyle={estilo.btn2Texto} />
        </ImageBackground>
      </View>
  );
}