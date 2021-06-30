import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Linking, Platform,Animated, Dimensions, Image,StyleSheet, View, Button , SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';

import { FontAwesome5 } from '@expo/vector-icons';

// Font Awesome Icons...

import HistoryScreen from '../profile/history_page';

export default function ProfileScreen(){

    const dialCall = (number) => {
        let phoneNumber ='';
        if (Platform.OS === 'android') {phoneNumber = `tel:${number}`;}
        else {phoneNumber = `telprompt:${number}`;}
        Linking.openURL(phoneNumber);
    };

    return(
        // <View style={{ flex:1 , justifyContent: 'center',alignItems: 'center',backgroundColor: '#ECEAE4'}}>
        //     <Text>History</Text>
        //     <Text>Notifications</Text>
        // </View>
        // <Box></Box>
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                        source={{ 
                            uri: 'https://assets-global.website-files.com/60c5c9025063594e6cd453b9/60c5c902506359460bd453f5_ever-logo-638bcbe5031847a6ebbc31da705fee44.png',
                            
                        }}
                        resizeMode={'stretch'}
                        size={80}
                        backgroundColor= '#dddddd'

                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop:15,
                            marginBottom: 5,
                        }]}>Ever Medical</Title>
                        <Caption style={styles.caption}>@ever_medical</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.rows}>
                    <FontAwesome5 
                    name="map-marker-alt"
                    color='#777777'
                    size={20}
                    >
                    </FontAwesome5>

                    <Text style={{color: '#777777', marginLeft: 20}}>Bangkok, Thailand</Text>
                </View>

                <View style={styles.rows}>
                    <FontAwesome5 
                    name="phone-alt"
                    color='#777777'
                    size={20}
                    >
                    </FontAwesome5>

                    <Text style={{color: '#777777', marginLeft: 20}}>(+66) 88-282-8199</Text>
                </View>

                <View style={styles.rows}>
                    <FontAwesome5 
                    name="envelope"
                    color='#777777'
                    size={20}
                    >
                    </FontAwesome5>

                    <Text style={{color: '#777777', marginLeft: 20}}>ever_medical@everapp.io</Text>
                </View>

            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox,{
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>$140</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Orders</Caption>
                </View>
                
            </View>

            <View style={styles.menuWrapper}>

            <TouchableRipple onPress={() => {Linking.openURL('tel:0957270217')}}>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="phone-alt" color='#000000' size={25}></FontAwesome5>
                        <Text style={styles.menuItemText}>Consulting Call</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="poll" color='#FF6347' size={25}></FontAwesome5>
                        <Text style={styles.menuItemText}>Results</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="history" color='#000000' size={25}></FontAwesome5>
                        <Text style={styles.menuItemText}>History</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="question-circle" color='#FF6347' size={25}></FontAwesome5>
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="cog" color='#000000' size={25}></FontAwesome5>
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>

                
            </View>
        </SafeAreaView>
    );
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