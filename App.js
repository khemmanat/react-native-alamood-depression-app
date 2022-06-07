import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, Dimensions, Image,StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import HomeScreen from './src/mainscreen/homepage';
import ProfileScreen from './src/mainscreen/profile_page';
import TherapyScreen from './src/mainscreen/therapy_page';
import DepressScreen from './src/mainscreen/depression_page';
import ActionScreen from './src/mainscreen/action_page';


const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Depress: DepressScreen,
        Action: ActionScreen,
        Therapy: TherapyScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            title: 'App'
        }
    }
);


export default createAppContainer(navigator);