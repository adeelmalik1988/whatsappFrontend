import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Octicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons"

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Color from "../constants/Colors"
import { View } from '../components/Themed';


const BottomTab = createBottomTabNavigator<RootTabParamList>();
const TopTab = createMaterialTopTabNavigator<RootTabParamList>()

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <TopTab.Navigator
            initialRouteName="Camera"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].background,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint

                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 4,
                }
            }}>
            <TopTab.Screen
                name="Camera"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<'Camera'>) => ({
                    title: 'Camera',
                    tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
                    tabBarLabel: () => null
                    // headerRight: () => (
                    //   <Pressable
                    //     onPress={() => navigation.navigate('Modal')}
                    //     style={({ pressed }) => ({
                    //       opacity: pressed ? 0.5 : 1,
                    //     })}>
                    //     <FontAwesome
                    //       name="info-circle"
                    //       size={25}
                    //       color={Colors[colorScheme].text}
                    //       style={{ marginRight: 15 }}
                    //     />
                    //   </Pressable>
                    // ),
                })}
            />
            <TopTab.Screen
                name="Chats"
                component={TabTwoScreen}
                options={{
                    title: 'Chats',
                    // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />
            <TopTab.Screen
                name="Status"
                component={TabTwoScreen}
                options={{
                    title: 'Status',
                    // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />
            <TopTab.Screen
                name="Calls"
                component={TabTwoScreen}
                options={{
                    title: 'Calls',
                    // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />



        </TopTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}