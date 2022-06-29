import React from "react";
import { Icon } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Categorias from '../pages/Categorias';
import Favoritos from '../pages/Favoritos';
import Carrinho from "../pages/Carrinho";


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
         <TabNavigation.Screen
            name='FavoritosTabScreen'
            component={Favoritos}
            options={{
               tabBarLabel: 'Favoritos',
               tabBarIcon: ({ size, color }) => (
                  <Icon name='heart' color={color} type='font-awesome' size={size} />
               )
            }}
         />

         <TabNavigation.Screen
            name='CarrinhoTabScreen'
            component={Carrinho}
            options={{
               tabBarLabel: 'Carrinho',
               tabBarIcon: ({ size, color }) => (
                  <Icon name='shopping-cart' color={color} type='font-awesome' size={size} />
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
            options={{
               title: 'Home',
               headerTitleStyle: { color: '#fff' },
               headerStyle: { backgroundColor: '#333' },
               headerTintColor: '#fff',
               drawerActiveBackgroundColor: '#333',
               drawerActiveTintColor: '#fff',
               drawerIcon: ({ size, color }) => (
                  <Icon name='home' color={color} type='font-awesome' size={size} />
               )
            }}
            component={BottomTabNavigator}
         />
         <DrawerNavigation.Screen
            name='CategoriasDrawerScreen'
            component={Categorias}
            options={{
               title: 'Categorias',
               headerTitleStyle: { color: '#fff' },
               headerStyle: { backgroundColor: '#333' },
               headerTintColor: '#fff',
               drawerActiveBackgroundColor: '#333',
               drawerActiveTintColor: '#fff',
               drawerIcon: ({ size, color }) => (
                  <Icon name='ballot' color={color} type='font-awesome5' size={size} />
               )
            }}
         />
      </DrawerNavigation.Navigator>
   )
}

const StackNavigation = createNativeStackNavigator()

const Routes = () => {

   return (
      <NavigationContainer>
         <StackNavigation.Navigator>
            <StackNavigation.Screen
               name='LoginScreen'
               component={Login}
               options={{
                  headerShown: false,
               }}
            />
            <StackNavigation.Screen
               name='HomeScreen'
               component={NavigationDrawer}
               options={{
                  headerShown: false,
               }}
            />
         </StackNavigation.Navigator>
      </NavigationContainer>
   )
}

export default Routes;