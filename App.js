import * as React from 'react';
import { Button, View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// HOME SCREEN

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   button: {
    
//   },
//   text: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

function LoginScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center',  backgroundColor: '# ',}}>
      <Image style={styles.img} source={require('./assets/logoVivaBem.svg')} />
      <Text style={styles.texto}>LOGIN</Text>
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput secureTextEntry={true} style={styles.input} placeholder='Senha' />
      <CustomButton title="Entrar" onPress={() => navigation.navigate('Profile')} style={styles.btn}/>
      <view>
      </view>   
    </View>
  );
}




function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to Notifications" onPress={() => navigation.navigate('Notifications')} style={styles.btn}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
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

const styles = StyleSheet.create({

    img: {
      width: 320,
       height: 100,
        marginTop: 75
    },

    texto: {
      color: '#23475F', 
      fontFamily: 'Segoe UI', 
      fontSize: 35, 
      marginTop: 50,
      fontWeight: '500',
    },

    input: {
      fontFamily: 'Segoe UI',
      fontSize: 23,
      borderBottomWidth: 1,
      borderColor: '#00CAB0',
      marginTop: 40
    },

    btn: {
      backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    },
});

