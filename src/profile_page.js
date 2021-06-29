import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, Dimensions, Image,StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Font Awesome Icons...

export default function ProfileScreen(){
    return(
        <View style={{ flex:1 , justifyContent: 'center',alignItems: 'center',backgroundColor: '#ECEAE4'}}>
            <Text>History</Text>
            <Text>Notifications</Text>
        </View>
    )
}