import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import { Icon } from 'react-native-elements';

const TabNavigation = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#333',
          borderBottomWidth: 0,
          borderTopColor: 'transparent'
          // padding: 5
        },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <TabNavigation.Screen
        name='HomeTabScreen'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Icon name='home' color={color} type='font-awesome' size={size} />
          )
        }}
      />
      <TabNavigation.Screen
        name='CategoriasTabScreen'
        component={Categorias}
        options={{
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ size, color }) => (
            <Icon name='ballot' color={color} type='font-awesome5' size={size} />
          )
        }}
      />
    </TabNavigation.Navigator>
  )
}

const DrawerNavigation = createDrawerNavigator()
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen
        name='TabNavigationScreen'
        options={{ title: 'Home Principal', headerTitleStyle: { color: '#fff' }, headerStyle: { backgroundColor: '#333' } }}
        component={BottomTabNavigator}
      />
      <DrawerNavigation.Screen
        name='CategoriasDrawerScreen'
        component={Categorias}
      />
    </DrawerNavigation.Navigator>
  )
}

const StackNavigation = createNativeStackNavigator()

export default () => {

  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          name='LoginScreen'
          component={Login}
        />
        <StackNavigation.Screen
          name='HomeScreen'
          component={NavigationDrawer}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  )
}