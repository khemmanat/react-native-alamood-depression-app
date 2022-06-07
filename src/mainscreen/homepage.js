import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Font Awesome Icons...
import { FontAwesome5 } from "@expo/vector-icons";
import BottomNavigation from '../BottomNavigation';

const HomeScreen= ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
        <View style={([styles.rows],{marginTop: 20,})}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>
            Welcome To A'la Mood
          </Text>
        </View>
        <View
          style={{
            width: 300,
            backgroundColor: "white",
            position: "absolute",
            // marginHorizontal: 0,
            marginTop: 150,
            // Max Height...
            height: 100,
            borderRadius: 15,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="sun" size={20} color={"#ffa500"} />
          <Text > Add your mood </Text>
        </View>
        
        <View
          style={{
            width: 300,
            backgroundColor: "white",
            position: "absolute",
            // marginHorizontal: 20,
            marginTop: 330,
            // Max Height...
            height: 150,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <Text> This is the box </Text>
        </View>


        <View
          style={{
            width: 300,
            backgroundColor: "white",
            position: "absolute",
            // marginHorizontal: 20,
            marginTop: 500,
            // Max Height...
            height: 200,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> This is the box </Text>
        </View>

        <View
          style={{
            width: 300,
            backgroundColor: "white",
            position: "absolute",
            // marginHorizontal: 20,
            marginTop: 800,
            // Max Height...
            height: 200,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> This is the box </Text>
        </View>
      {/* </ScrollView> */}
      <BottomNavigation/>
    </SafeAreaView>

    
    // </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#1b182f",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    // marginTop: 50,
    backgroundColor: "#2c2942",
    // paddingHorizontal: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
  rows: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
  },
  scrollview: {
    // paddingHorizontal : 10,
    paddingLeft: 5,
    width: "100%",
  },
});

export default HomeScreen;