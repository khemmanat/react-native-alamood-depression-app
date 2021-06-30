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
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Font Awesome Icons...

export default function HomeScreen() {
  return (
    // <View style={{ flex:1 , justifyContent: 'center',alignItems: 'center',backgroundColor: '#D6ECCB' }}>
    //     <Text>HomeScreen</Text>
    // </View>
    // <View style={styles.body}>
    <View style={styles.container}>
      {/* <Text>Welcome</Text> */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome!</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          position: "absolute",
          bottom: 30,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 20,
        }}
      ></View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#D6ECCB",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    marginTop: 50,
    backgroundColor: "#D6ECCB",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
});
