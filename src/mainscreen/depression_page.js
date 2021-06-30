import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, Dimensions, Image,StyleSheet, Text, View, Button ,ScrollView, SafeAreaView,Card} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { render } from 'react-dom';

// Font Awesome Icons...

// const { height } = Dimensions.get('window');

export default function DepressScreen(){

    // state = {
    //     screenHeight : 0,
    // };

    // onContentSizeChange = (contentWidth, contentHeight) =>{
    //     this.setState({screenHeight: contentHeight})
    // };

        // const scrollEnabled = this.state.screenHeight > height;
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barstyle="light-content" backgroundColor="#468189"/>
                <View>
                    <Text style={{marginBottom: 20, fontSize: 35, fontWeight: 'bold'}}>
                        Depression
                    </Text>
                </View>
                
                
                <ScrollView style={styles.scrollView}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>What is Depression</Text>
                    <Text>        Depression (major depressive disorder) is a common</Text>
                    <Text style={{ marginBottom: 10}}>and serious medical illness that negatively afects how you feel, the way you
                    think and how you act. Fortunately, it is also treatable. 
                    </Text>

                    <Text>        Depression causes feelings of sadness and/or a loss </Text>
                    <Text style={{ marginBottom: 10}}>of interest in activities you once enjoyed. It can lead to a variety of emotional and physical problems and can decrease your ability to function at work and at home.
                    </Text>

                    <Text style={{fontWeight: 'bold'}}>Depression symtoms can vary from mild to severe and      can include: </Text>
                    <Text style={{ marginTop: 8 , marginBottom: 5}}>- Feeling sad or having a depressed mood</Text>
                    <Text style={{ marginBottom: 5}}>- Loss of interest or pleasure in activities once enjoyed</Text>
                    <Text style={{ marginBottom: 5}}>- Changes in appetite - weight loss or gain unrelated to dieting</Text>
                    <Text style={{ marginBottom: 5}}>- Trouble sleeping or sleeping too much</Text>
                    <Text style={{ marginBottom: 5}}>- Loss of energy or increased fatigue</Text>
                    <Text style={{ marginBottom: 5}}>- Increase in purposeless physical activity (e.g. inability to sit still, pacing, handwringing) or slowed movements or speech (these actions must be severe enough to be observable by others)</Text>
                    <Text style={{ marginBottom: 5}}>- Feeling worthless or guilty</Text>
                    <Text style={{ marginBottom: 5}}>- Difficulty thinking, concentrating or making decisions</Text>
                    <Text style={{ marginBottom: 10}}>- Thought of death or suicide</Text>

                    <Text style={{marginBottom: 10}}>  Symtoms must last at least two weeks and must represent a change in your previous level of functioning for a diagnosis of depression</Text>

                    <Text style={{marginBottom: 10}}>  Also, medical conditions (e.g. thyroid problems, a brain tumor or vitamin deficiency) can mimic symptoms of depression so it is important to rule out general medical causes</Text>

                    <Text style={{marginBottom: 10}}>  Depression affects an estimated one in 15 adults (6.7%) in any given year. And one in six people (16.6%) will experience depression at some time in their life.</Text>

                    <Text style={{marginBottom: 10}}>  Depression can occur at any time, but on average, first appears during the late teens to mid-20s.</Text>

                    <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Depression is different from sadness or grief/bereavement</Text>

                </ScrollView>
                
                
            </SafeAreaView>
        )
    
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFCCB6',
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