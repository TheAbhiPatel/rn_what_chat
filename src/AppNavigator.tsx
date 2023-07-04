import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import {IRootStackParamList} from './types';
import Login from './screens/Login';
import Home from './screens/Home';
import TopTabNavigator from './TopTabNavigator';
import Profile from './screens/Profile';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator<IRootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#000'} />

      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false, animation: 'simple_push'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Tabs"
          component={TopTabNavigator}
          options={{
            header: () => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    backgroundColor: '#128C7E',
                    paddingVertical: 6,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#fff',
                      }}>
                      WhatsChat
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        source={require('./images/search.png')}
                        style={{width: 20, height: 20, tintColor: '#fff'}}
                      />
                    </TouchableOpacity>
                    <View style={{marginRight: 18}} />
                    <TouchableOpacity>
                      <Image
                        source={require('./images/camera.png')}
                        style={{width: 28, height: 28, tintColor: '#fff'}}
                      />
                    </TouchableOpacity>
                    <View style={{marginRight: 16}} />
                    <TouchableOpacity>
                      <Image
                        source={require('./images/dots.png')}
                        style={{width: 22, height: 22, tintColor: '#fff'}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            },

            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});