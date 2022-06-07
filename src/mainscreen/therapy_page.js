import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, Dimensions, Image,StyleSheet, Text, View, Button ,SafeAreaView, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Font Awesome Icons...

const  TherapyScreen = (props) =>{
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barstyle="light-content" backgroundColor="#468189"/>
            <View>
                <Text style={{marginBottom: 20, fontSize: 35, fontWeight: 'bold'}}>
                    Therapy
                </Text>
            </View>
            
            
            <ScrollView style={styles.scrollView}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Therapies for Depression</Text>
                

            </ScrollView>
            
            
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#D4F0F0',
    flex:1 , 
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 50
},
title:{
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold'
},
scrollView:{
    backgroundColor: 'white',
    width: '95%',
    height: 100,
    borderRadius: 10,
    paddingVertical:20,
    paddingHorizontal: 10,
    marginBottom: 90
},
insideText :{
    fontSize: 20
}
})

export default TherapyScreen;