/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CheckTaskScreen from '../views/CheckTaskScreen';
import CalenderScreen from '../views/CalenderScreen';
import {ScreenName} from './screenname';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Colors} from '../utils/color';
import AddEventCalendarScreen from '../views/AddEventCalendarScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function TabBottom() {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.calender}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.yellow,
        tabBarStyle: {
          paddingBottom: 5,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <EvilIcons name="calendar" size={40} color={color} />;
          },
        }}
        name={ScreenName.calender}
        component={CalenderScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <EvilIcons name="chart" size={40} color={color} />;
          },
        }}
        name={ScreenName.checkTask}
        component={CheckTaskScreen}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={ScreenName.bottomTab}>
      <Stack.Screen
        component={TabBottom}
        options={{headerShown: false}}
        name={ScreenName.bottomTab}
      />
      <Stack.Screen
        component={AddEventCalendarScreen}
        options={{headerShown: false}}
        name={ScreenName.addCalendar}
      />
    </Stack.Navigator>
  );
}
