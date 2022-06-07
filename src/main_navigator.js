import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, Dimensions, Image,StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import HomeScreen from './mainscreen/homepage';
import ProfileScreen from './mainscreen/profile_page';
import TherapyScreen from './mainscreen/therapy_page';
import DepressScreen from './mainscreen/depression_page';
import ActionScreen from './mainscreen/action_page';

// const navigator = createStackNavigator(
//     {
//         Home: HomeScreen,
//         Depress: DepressScreen,
//         Action: ActionScreen,
//         Therapy: TherapyScreen,
//         Profile: ProfileScreen,
//     },
//     {
//         initialRouteName: 'Home',
//         defaultNavigationOptions:{
//             title: 'App'
//         }
//     }
// );


// export default createAppContainer(navigator);


