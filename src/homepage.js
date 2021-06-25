import { StatusBar } from 'expo-status-bar';
import {faHome, faHeart, faCommentAlt, faBars} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View , Button} from 'react-native';
import BubbleTabBar, {IBubbleTabConfig, IIconRenderer} from 'react-native-bubble-tabbar';

const tabs: IBubbleTabConfig[] = [
    {
        activeColor: '#cc0066',
        activeBackgroundColor: '#f76a8c',
        activeIcon: faHome,
    },
    {
        activeColor: '#ff6f5e',
        activeBackgroundColor: '#f8dc88',
        activeIcon: faHeart,
    },
    {
        activeColor: '#1eb2a6',
        activeBackgroundColor: '#ccf0e1',
        activeIcon: faCommentAlt,
    },
    {
        activeColor: '#4d80e4',
        activeBackgroundColor: '#9aceff',
        activeIcon: faBars,
        name: 'Last',
    }
];

const fontAwesomeIconRenderer = ({icon, color}: IIconRenderer)=>
    <FontAwesomeIcon
        icon={icon}
        color={color}
        size={18}
    />;

const CustomTabBar: React.FC<BottomTabBarProps> =({
    state, descriptors, navigation,
}) =>{
    return(
        <BubbleTabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
            tabs={tabs}
            iconRenderer={fontAwesomeIconRenderer}
        />
    );
    
};

const Tab = createBottomTabNavigator();


const MainNavigator: React.FC = (){
    return (
        <Tab.Navigator
            tabBar={({state, descriptors, navigation }) =>
                <CustomTabBar
                    state={state}
                    descriptors={descriptors}
                    navigation={navigation}
                />
            }
        >
        <Tab.Screen name="One" component={ScreenOne}/>
        <Tab.Screen name="One" component={ScreenOne}/>
        <Tab.Screen name="One" component={ScreenOne}/>
        <Tab.Screen name="One" component={ScreenOne}/>
        <Tab.Screen name="ThisRouteDoesNotShowBecauseOnlyFourObjectsAreInTabs" component={ScreenHiddenFromTabBar}/>
        </Tab.Navigator>
    )
}
