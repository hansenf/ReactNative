import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from '../Pages/Home';
import AboutScreen from '../Pages/AboutScreen';
import AddScreen from '../Pages/AddScreen';
import LoginScreen from '../Pages/Login';
import ProjectScreen from '../Pages/ProjectScreen';
import Setting from '../Pages/Setting';
import SkillProject from '../Pages/SkillProject';

 const Tab = createBottomTabNavigator();
 const Drawwer = createDrawerNavigator();
 const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component ={LoginScreen}></Stack.Screen>
                <Stack.Screen name="HomeScreen" component ={HomeScreen}></Stack.Screen>
                <Stack.Screen name="MainApp" component ={MainApp}></Stack.Screen>
                <Stack.Screen name="MyDrawwer" component ={MyDrawwer}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MainApp=()=>(
        <Tab.Navigator>
            <Tab.Screen name="AboutScreen" component ={AboutScreen}></Tab.Screen>
            <Tab.Screen name="Addcreen" component ={SkillProject}></Tab.Screen>
            <Tab.Screen name="SkillProject" component ={AddScreen}></Tab.Screen>
        </Tab.Navigator>
)

const MyDrawwer=()=>(
    <Drawwer.Navigator>
        <Drawwer.Screen name ="App" component={MainApp}></Drawwer.Screen>
        <Drawwer.Screen name ="AboutScreen" component={AboutScreen}></Drawwer.Screen>
    </Drawwer.Navigator>
)
