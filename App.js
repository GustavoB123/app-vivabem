import * as React from 'react';
import { Button, View, Image, Text, TextInput, estiloheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { estilo }  from './estilo/estilo'

const ImgBack = './assets/fundo.png'


// HOME SCREEN

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[estilo.button, buttonStyle]}>
      <Text style={[estilo.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};



function LoginScreen({ navigation }) {
  return (
    

    <View style={{flex: 1, alignItems: 'center',  backgroundColor: '# ',}}>
      <ImageBackground source={require(ImgBack)} style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={estilo.img} source={require('./assets/logoVivaBem.svg')} />
      <TextInput style={estilo.input} placeholder='Email' />
      <TextInput secureTextEntry={true} style={estilo.input} placeholder='Senha' />
      <CustomButton title="Entrar" onPress={() => navigation.navigate('Dashboard')} buttonStyle={estilo.btn} textStyle={estilo.btnTexto} />
      <CustomButton title="Esqueci a senha" onPress={() => navigation.navigate('Settings')} buttonStyle={estilo.btn2} textStyle={estilo.btn2Texto} />
      </ImageBackground>
    </View>
  );
}

function DashboardScreen({ navigation }) {
  return (
    <View style={estilo.dashView}>
      
      <Text style={{fontFamily: 'Segoe UI', fontSize: 40, fontWeight: '700', color: '#34495e', marginTop: 50,}}>Olá, usuário</Text>
      <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070', marginTop: 30}}> Nome do Plano</Text>

      <view style={estilo.dashB1}>
        <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070'}}>Você está na sua</Text>
        <Text style={{fontFamily: 'Segoe UI', fontSize: 40, fontWeight: '700', color: '#34495e'}}>contª</Text>
        <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070'}}>sessão de treinos</Text>
      </view>

      <view style={estilo.dashB2}>
        <CustomButton title='Acesse suas aulas' buttonStyle={estilo.btnDash} textStyle={estilo.TextoBtnDash}/>
        <CustomButton title='Acesse seus treinos' buttonStyle={estilo.btnDash} textStyle={estilo.TextoBtnDash}/>
      </view>


      <Image source={require('./assets/treinoDash.png')} style={{width: 345, height: 219, marginTop: 30}} />

      <CustomButton title='UPGRADE NO PLANO' buttonStyle={estilo.btnPlano} textStyle={estilo.btnTPlano}/>


      <view style={estilo.dashFooter}>
        <view style={estilo.dashIcon}>
          <Image source={require('./assets/icons/iconExe.svg')} style={{width: 40, height: 40, borderRadius: 50 }}/>
          <Text>Exercícios</Text>
          
        </view>
      </view>


    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



