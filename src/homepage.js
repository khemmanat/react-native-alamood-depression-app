import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, Dimensions, Image,StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Font Awesome Icons...

export default function HomeScreen(){
    return(
        <View style={{ flex:1 , justifyContent: 'center',alignItems: 'center',backgroundColor: '#D6ECCB' }}>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#D6ECCB',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: 10
    }
  });