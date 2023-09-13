/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TextField from './src/components/TextField/TextField';
import Text from './src/components/Text/Text';
import useService from './src/hooks/useService';
import CountryDetail from './src/components/CountryDetail/CountryDetail';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './src/screen/SearchScreen/SearchScreen';
import FavouriteScreen from './src/screen/FavouriteScreen/FavouriteScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import useStorage from './src/hooks/useStorage';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';



const Tab = createMaterialTopTabNavigator();



function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function MainNavigator(): JSX.Element {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';


  return (

    <Tab.Navigator initialRouteName='Favourite' >

      <Tab.Screen
        options={{
          tabBarStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
            paddingTop: insets.top,
          }, tabBarLabelStyle: {
            color: isDarkMode ? Colors.lighter : Colors.darker,
          }
        }}
        name="Search" component={SearchScreen} />
      <Tab.Screen
        options={{
          tabBarStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
            paddingTop: insets.top,
          },
          tabBarLabelStyle: {
            color: isDarkMode ? Colors.lighter : Colors.darker,
          }
        }}
        name="Favourite" component={FavouriteScreen} />
    </Tab.Navigator>

  );
}



export default App;
