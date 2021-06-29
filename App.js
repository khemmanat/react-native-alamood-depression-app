import { StatusBar } from 'expo-status-bar';
import React, { Component , useRef} from 'react';
import { Animated, Dimensions, Image,StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Plus ...
import plus from '/Users/kimhun/Documents/Ever Medical/React Native Mini Project 1/alamood-depression/assets/plus.png';

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons';
import { Platform } from 'react-native';

// Import Screens from files

import HomeScreen from './src/homepage';
import ProfileScreen from './src/profile_page';
import TherapyScreen from './src/therapy_page';
import DepressScreen from './src/depression_page';
import ActionScreen from './src/action_page';

const Tab = createBottomTabNavigator();
export default function  App() {

  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar..
        style:{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 30,
          marginHorizontal: 20 ,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
      }}>

        {
          // Tab Screens...

          // Tab Icons...


        }
        <Tab.Screen name={"Home"} component= {HomeScreen} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{
                // centring Tab Button...
                alignItems: 'center',
                justifyContent: 'center',
                top: 15
              }}>
                <FontAwesome5
                name="home"
                size={20}
                color={focused ? 'red': 'gray'}
                >
                </FontAwesome5>
                <Text style={{color: focused ? 'red': 'gray' ,fontSize: 10}}>Home</Text>
              </View>
          )
        }} listeners={({navigation, route}) => ({
          // OnPress Update...
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        <Tab.Screen name={"Depression"} component= {DepressScreen} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{
                // centring Tab Button...
                alignItems: 'center',
                justifyContent: 'center',
                top: 15,

              }}>
                <FontAwesome5
                name="stethoscope"
                size={20}
                color={focused ? 'red': 'gray'}
                >
                
                </FontAwesome5>
                <Text style={{color: focused ? 'red': 'gray' ,fontSize: 10}}>Depression</Text>
              </View>
          )
        }} listeners={({navigation, route}) => ({
          // OnPress Update...
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        {

          // Extra Tab Screen For Action Button...
        }

        <Tab.Screen name={"ActionButton"} component={ActionScreen} options={{
          tabBarIcon: ({focused}) =>(
             
            <TouchableOpacity >
              <View style={{ 
                width: 55,
                height: 55,
                backgroundColor: 'red',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                <Image source={plus} style={{ 
                  width: 40,
                  height: 40,
                  tintColor: 'white',
                }}></Image>
              </View>
            </TouchableOpacity>
              
          )
        }} ></Tab.Screen>

        <Tab.Screen name={"Therapy"} component= {TherapyScreen} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{
                // centring Tab Button...
                alignItems: 'center',
                justifyContent: 'center',
                top: 15,
              }}>
                <FontAwesome5
                name="briefcase-medical"
                size={20}
                color={focused ? 'red': 'gray'}
                >

                </FontAwesome5>
                <Text style={{color: focused ? 'red': 'gray' ,fontSize: 10}}>Therapy</Text>
              </View>
          )
        }} listeners={({navigation, route}) => ({
          // OnPress Update...
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        <Tab.Screen name={"Settings"} component= {ProfileScreen} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{
                // centring Tab Button...
                alignItems: 'center',
                justifyContent: 'center',
                top: 15
              }}>
                <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? 'red': 'gray'}
                >

                </FontAwesome5>
                <Text style={{color: focused ? 'red': 'gray' ,fontSize: 10}}>Profile</Text>
              </View>
          )
        }} listeners={({navigation, route}) => ({
          // OnPress Update...
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
      </Tab.Navigator>

      <Animated.View style={{ 
        width: getWidth() - 20,
        height: 2,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 88,
        // Horizontal Padding = 20..
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue}
        ]
      }}>

      </Animated.View>
    </NavigationContainer>

  )
}

function getWidth(){
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80


  // Total five Tabs
  return width / 5
}

function EmptyScreen(){
  return(
    <View style={{ flex: 1,justifyContent: 'center',alignItems: 'center'}}>
    </View>
  )
}


const styles = StyleSheet.create({
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
