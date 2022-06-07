import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, Dimensions, Image,StyleSheet, Text, View, Button , SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Font Awesome Icons...

export default function HistoryScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <Image
                source={}
            />

            <View style={{ flex:1 , justifyContent: 'center',alignItems: 'center', backgroundColor: '#D4F0F0'}}>
                <Text>Welcome</Text>
                <Button>Click Me</Button>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ECEAE4',
        marginTop: 50
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    rows: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1, 
        borderTopColor: '#dddddd',
        borderTopWidth: 1, 
        flexDirection: 'row',
        height: 100,
    },
    infoBox:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    },
});